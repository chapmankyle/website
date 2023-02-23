import { store } from '@/app/store'

import TaskManager from './taskManager'

/**
 * Information to display in the debug text.
 */
export default class DebugInfo {

  /** Identifier of the element to create */
  elementID = 'debug-info'

  /** Element that holds the debug information */
  infoElement: HTMLDivElement | null = null

  /** `true` if the debug info has been created, `false` otherwise */
  isCreated = false

  /** Constructor */
  constructor() {
    this.infoElement = document.createElement('div')
    this.infoElement.setAttribute('id', 'debug-info')
    this.infoElement.className = 'absolute right-0 top-0 z-10 px-2 py-1 text-xs bg-zinc-800/70'
    document.body.append(this.infoElement)

    // Periodically update text
    TaskManager.runEvery(this.update, 1000)
    this.update()
  }

  /** Updates the debug information */
  update = (): void => {
    if (!this.infoElement) {
      return
    }

    const info = store.getState().debug
    const text = `
      FPS: ${info.fps}
    `

    // Update debug text
    this.infoElement.innerHTML = text
  }

}
