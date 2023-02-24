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
      FPS: ${info.fps}
    `

    // Update text
    this.setState({ text })
  }

  /** Render component */
  render() {
    return <div id='debug-info' className='absolute right-0 top-0 z-10 px-2 py-1 text-xs bg-zinc-800/70'>
      { this.state.text }
    </div>
  }

}
