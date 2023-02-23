/** Task that can be run. */
interface Task {
  /** Identifier of the task. */
  id: number;
  /** Number of milliseconds to wait before executing this task. */
  delay: number;
  /** Next time at which this task should be run. */
  nextRun: number;
  /** `true` if this should be run indefinitely, `false` otherwise. */
  infinite: boolean;
  /** Function that should be executed when this task is run. */
  callback: () => void;
}

/** Global identifier to keep track of tasks. */
let taskID = 0

/**
 * Manages tasks and when they should be run.
 */
export default new class TaskManager {

  /** Task manager to use in case renderer has encountered an issue. */
  backupManager = 0

  /** Last time the tasks were updated. */
  lastUpdate = 0

  /** `true` if the tasks are busy being updated, `false` otherwise. */
  isUpdating = false

  /** @private Tasks that have been registered. */
  tasks = [] as Task[]

  /** @private Timeout for the backup task manager. */
  updateTimeout = 250

  /** Constructor */
  constructor() {
    this.backupManager = window.setInterval(this.updateBackup, this.updateTimeout)
  }

  /** Updates the currently existing tasks. */
  update(): void {
    // No tasks to run
    if (this.tasks.length < 1) {
      this.lastUpdate = Date.now()
      this.isUpdating = false
      return
    }

    // Already updating
    if (this.isUpdating) {
      return
    }

    // Indicate that we have started the updates
    this.isUpdating = true

    // Execute available tasks
    const now = Date.now()
    for (let idx = this.tasks.length - 1; idx >= 0; --idx) {
      const task = this.tasks[idx]

      // Ignore if we should not run task yet
      if (task.nextRun > now) {
        continue
      }

      // Execute callback
      try {
        task.callback()
      } catch (err) {
        console.error('[TaskManager] Error:', err)
      }

      task.nextRun = task.delay + now

      // Task has been executed the requested number of times
      if (!task.infinite) {
        this.tasks.splice(idx, 1)
      }
    }

    // Done
    this.lastUpdate = Date.now()
    this.isUpdating = false
  }

  /** @private Updates the backup task manager. */
  updateBackup = (): void => {
    if (this.isUpdating || Date.now() - this.lastUpdate < this.updateTimeout) {
      return
    }

    // Update if task manager has not been working correctly
    this.update()
  }

  /**
   * Run the task once after the given delay has elapsed.
   * @param callback Function to execute when running the task.
   * @param delay Number of milliseconds to wait before running this task.
   * @returns Identifier of the task that has been scheduled to run.
   */
  runOnce(callback: () => void, delay: number = 0): number {
    const id = taskID++
    this.tasks.push({ id, delay, nextRun: Date.now() + delay, infinite: false, callback })
    return id
  }

  /**
   * Run the task every number of milliseconds given as the interval.
   * @param callback Function to execute when running the task.
   * @param interval Number of milliseconds to wait before each consecutive execution of the task.
   * @returns Identifier of the task that has been scheduled to run.
   */
  runEvery(callback: () => void, interval: number = 0): number {
    const id = taskID++
    this.tasks.push({ id, delay: interval, nextRun: Date.now() + interval, infinite: true, callback })
    return id
  }

  /**
   * Clears a task that matches the given identifier.
   * @param id Identifier of the task to clear.
   */
  clear(id: number): void {
    const idx = this.tasks.findIndex(task => task.id === id)
    if (idx < 0) {
      return
    }

    // Remove task
    this.tasks.splice(idx, 1)
  }

}
