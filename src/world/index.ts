import { BoxGeometry, Mesh, MeshNormalMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

import Graphics from '@/world/graphics'
import TaskManager from '@/utilities/taskManager'
import Timer from '@/utilities/timer'

import { store } from '@/app/store'
import { DebugState, update as debugUpdate } from '@/features/debugSlice'

/**
 * World renderer.
 */
export default class World {

  /** Renderer for the world */
  renderer: WebGLRenderer | null = null

  /** Scene to render */
  scene: Scene | null = null

  /** Camera used to view the world */
  camera: PerspectiveCamera | null = null

  /** Mesh to render */
  mesh: Mesh | null = null

  /** Identifier of the resize task */
  resizeTaskID: number | null = null

  /** Current number of frames per second */
  fps = 0

  /** Number of frames that have been rendered */
  frameCount = 0

  /** Last time the number of frames were counted */
  lastFrameUpdateTime = 0

  /** `true` if the world has been created, `false` otherwise. */
  private isCreated = false

  /** Timers to keep track of how long certain processes take. */
  private timers = {
    render: new Timer()
  }

  /**
   * Creates the world.
   * @param canvas Canvas to draw world to.
   */
  create(canvas: HTMLElement): void {
    // Already created
    if (this.isCreated) {
      return
    }

    this.camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
    this.camera.position.z = 1

    this.scene = new Scene()

    const geometry = new BoxGeometry(0.2, 0.2, 0.2)
    const material = new MeshNormalMaterial()

    this.mesh = new Mesh(geometry, material)
    this.scene.add(this.mesh)

    // Setup renderer
    this.renderer = new WebGLRenderer({ antialias: true, canvas })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Graphics.pixelRatio)
    this.renderer.setAnimationLoop(this.render)

    // Fetch graphics information
    this.updateGraphicsInfo()

    // Add listener for window resize
    window.addEventListener('resize', this.onResize)

    // Lost WebGL context
    this.renderer.getContext().canvas.addEventListener('webglcontextlost', () => {
      window.location.reload()
    })

    this.isCreated = true
  }

  /** Updates the graphics information */
  updateGraphicsInfo() {
    if (!this.renderer) {
      return
    }

    // Find render info extension
    const context = this.renderer.getContext()
    const glInfo = context.getExtension('WEBGL_debug_renderer_info')
    if (!glInfo) {
      console.log('[World] No WEBGL_debug_renderer_info extension present.')
      return
    }

    const vendor = context.getParameter(glInfo.UNMASKED_VENDOR_WEBGL) || '?'
    const renderer = context.getParameter(glInfo.UNMASKED_RENDERER_WEBGL) || '?'
    const glVersion = this.renderer.capabilities.isWebGL2 ? 'WebGL2' : 'WebGL1'
    store.dispatch(debugUpdate({ graphicsVendor: vendor, graphicsRenderer: renderer, webglVersion: glVersion }))
  }

  /** Destroys the world. */
  destroy(): void {
    // Already destroyed
    if (!this.isCreated) {
      return
    }

    if (this.mesh?.material) {
      if (Array.isArray(this.mesh.material)) {
        // Dispose each material
        for (let idx = 0; idx < this.mesh.material.length; idx++) {
          this.mesh.material[idx].dispose()
        }
      } else {
        // Dispose single material
        this.mesh.material.dispose()
      }
    }

    if (this.renderer) {
      this.renderer.dispose()
    }

    this.isCreated = false
  }

  /** Called when the window is resized */
  onResize = (): void => {
    if (this.resizeTaskID != null) {
      return
    }

    this.resizeTaskID = TaskManager.runOnce(() => {
      // Reset task ID
      this.resizeTaskID = null

      // No need to continue
      if (!this.camera || !this.renderer) {
        return
      }

      // Update aspect ratio
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()

      this.renderer.setPixelRatio(Graphics.pixelRatio)
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }, 250)
  }

  /** Called every frame */
  render = (delta: number): void => {
    // Nothing to render
    if (!this.renderer || !this.scene || !this.camera || !this.mesh) {
      return
    }

    const now = Date.now()

    this.mesh.rotation.x = delta / 2000
    this.mesh.rotation.y = delta / 1000

    // Update task manager
    TaskManager.update()

    const debugStoreUpdate = {} as DebugState

    // Update current frame count
    this.frameCount += 1
    if (now - this.lastFrameUpdateTime >= 1000) {
      this.fps = this.frameCount
      this.lastFrameUpdateTime = now
      this.frameCount = 0

      debugStoreUpdate.fps = this.fps
    }

    // Render scene
    this.timers.render.start()
    this.renderer.render(this.scene, this.camera)
    this.timers.render.stop()

    // Update render timings
    if (now - this.timers.render.lastUpdateTime >= 1000) {
      debugStoreUpdate.renderDuration = this.timers.render.elapsed
      debugStoreUpdate.renderMaxDuration = this.timers.render.max

      this.timers.render.lastUpdateTime = now
      this.timers.render.reset()
    }

    // Update renderer information
    debugStoreUpdate.rendererInfo = {
      calls: this.renderer.info.render.calls,
      triangles: this.renderer.info.render.triangles,
      meshes: this.renderer.info.memory.geometries,
      textures: this.renderer.info.memory.textures
    }

    store.dispatch(debugUpdate(debugStoreUpdate))
  }

}
