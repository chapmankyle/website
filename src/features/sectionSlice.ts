import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/** Default section value */
const defaultValue = 'home'

/** Initial state of the slice */
const initialState = {
  value: defaultValue,
}

/** Slice that updates the currently viewed section */
const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    /** Updates the current section */
    update(state, action: PayloadAction<string>) {
      state.value = action.payload
    },
    /** Resets the section to the default */
    reset(state) {
      state.value = defaultValue
    },
  },
})

export const { update } = sectionSlice.actions
export default sectionSlice.reducer
