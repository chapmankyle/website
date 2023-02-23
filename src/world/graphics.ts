/**
 * Controls the graphics within the world.
 */
export default new class Graphics {

  /** Pixel ratio to use in the world. */
  get pixelRatio() {
    return Math.min(window.devicePixelRatio || 1, 2)
  }

}
