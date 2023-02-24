/**
 * Used to determine how long it takes for a block of code to run.
 */
export default class Timer {

  /** Last time this timer was updated. */
  lastUpdateTime = 0

  /** Time at which the timer was started. */
  private startTime = 0

  /** Duration between calls to `start` and `stop`. */
  private duration = 0

  /** Maximum duration that has occurred between the call to `start` and `stop`. */
  private maxDuration = 0

  /** Total duration used in the average duration calculation. */
  private totalDuration = 0

  /** Number of durations that have been recorded. */
  private numDurations = 0

  /** Average duration between the calls to `start` and `stop`. */
  private avgDuration = 0

  /** Number of milliseconds that have elapsed between the `start` and `stop` calls. */
  get elapsed(): string {
    return this.avgDuration.toFixed(1) + 'ms'
  }

  /** Maximum duration that has occurred between the calls to `start` and `stop`. */
  get max(): string {
    return this.maxDuration.toFixed(1) + 'ms'
  }

  /** Starts the timer. */
  start(): void {
    this.startTime = this.now()
  }

  /** Stops the timer. */
  stop(): void {
    this.duration = this.now() - this.startTime
    this.maxDuration = Math.max(this.duration, this.maxDuration)

    // Update average calculation
    this.totalDuration += this.duration
    this.numDurations += 1
    this.avgDuration = this.totalDuration / this.numDurations
  }

  /** Resets the timer. */
  reset(): void {
    this.avgDuration = this.duration
    this.maxDuration = this.duration
    this.totalDuration = 0
    this.numDurations = 0
  }

  /** @returns Time, in milliseconds, at this current moment. */
  private now(): number {
    return performance?.now() ? performance.now() : Date.now()
  }

}
