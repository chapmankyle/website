import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/** Information about the renderer */
interface RendererInfo {
  /** Number of draw calls */
  calls: number;
  /** Number of triangles being rendered */
  triangles: number;
  /** Number of meshes being rendered */
  meshes: number;
  /** Number of textures being renderer */
  textures: number;
}

/** State of the debug information */
export interface DebugState {
  /** Frames per second */
  fps?: number;
  /** Average time it takes to render the scene */
  renderDuration?: string;
  /** Maximum time it has taken to render the scene */
  renderMaxDuration?: string;
  /** Vendor of the graphics card */
  graphicsVendor?: string;
  /** Graphics card currently in use */
  graphicsRenderer?: string;
  /** Version of WebGL that is being used */
  webglVersion?: string;
  /** Information about the renderer */
  rendererInfo?: RendererInfo;
}

/** Initial state of the slice */
const initialState: DebugState = {
  fps: 1,
  renderDuration: '0ms',
  renderMaxDuration: '0ms',
  graphicsVendor: '?',
  graphicsRenderer: '?',
  webglVersion: 'WebGL1',
  rendererInfo: { calls: 0, triangles: 0, meshes: 0, textures: 0 },
}

/** Slice that updates debug information */
const debugSlice = createSlice({
  name: 'debug',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<DebugState>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { update } = debugSlice.actions
export default debugSlice.reducer
