import { BoxGeometry, Mesh, MeshNormalMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three'

import { store } from '@/app/store'
import { update as debugUpdate } from '@/features/debugSlice'

import DebugInfo from '@/utilities/debugInfo'
import TaskManager from '@/utilities/taskManager'
import Graphics from './graphics'

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

  /** Reference to the debug information */
  debugInfo: DebugInfo | null = null

  /** Identifier of the resize task */
  resizeTaskID: number | null = null

  /** Current number of frames per second */
  fps = 0

  /** Number of frames that have been rendered */
  frameCount = 0

  /** Last time the number of frames were counted */
  lastFrameUpdateTime = 0

  /** @private `true` if the world has been created, `false` otherwise. */
  isCreated = false

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

    // Setup debug information
    this.debugInfo = new DebugInfo()

    // Add listener for window resize
    window.addEventListener('resize', this.onResize)

    // Lost WebGL context
    this.renderer.getContext().canvas.addEventListener('webglcontextlost', () => {
      window.location.reload()
    })

    this.isCreated = true
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

    // Update current frame count
    this.frameCount += 1
    if (now - this.lastFrameUpdateTime >= 1000) {
      this.fps = this.frameCount
      this.lastFrameUpdateTime = now
      this.frameCount = 0

      store.dispatch(debugUpdate({ fps: this.fps }))
    }

    // Render scene
    this.renderer.render(this.scene, this.camera)
  }

}
