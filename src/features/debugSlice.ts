import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DebugState {
  /** Frames per second */
  fps: number;
}

const initialState: DebugState = {
  fps: 1
}

export const debugSlice = createSlice({
  name: 'debug',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<DebugState>) => {
      return action.payload
    }
  }
})

export const { update } = debugSlice.actions
export default debugSlice.reducer
