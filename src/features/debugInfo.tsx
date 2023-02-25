import { PureComponent } from 'react'

import TaskManager from '@/utilities/taskManager'
import { store } from '@/app/store'

/**
 * Debug information to display.
 */
export default class DebugInfo extends PureComponent {

  /** Initial state */
  state = {
    text: ''
  }

  /** Called after first render */
  componentDidMount(): void {
    TaskManager.runEvery(this.update, 1000)
    this.update()
  }

  /** Updates the debug information */
  update = (): void => {
    const info = store.getState().debug
    const text = `
      FPS: ${info.fps} (avg=${info.renderDuration}, max=${info.renderMaxDuration})
      Graphics: gpu=${info.graphicsRenderer}
      ${info.webglVersion || 'WebGL1'}: calls=${info.rendererInfo?.calls || 0} triangles=${info.rendererInfo?.triangles || 0} meshes=${info.rendererInfo?.meshes || 0} textures=${info.rendererInfo?.textures || 0}
    `.trim()

    // Update text
    this.setState({ text })
  }

  /** Render component */
  render() {
    return <div id='debug-info' className='absolute right-0 top-12 z-10 px-2 py-1 font-mono text-xs hidden sm:block bg-zinc-900/70 whitespace-pre-line'>
      { this.state.text }
    </div>
  }

}
