import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit'

import debugReducer from '@/features/debugSlice'
import sectionReducer from '@/features/sectionSlice'

// Configure the global store
export const store = configureStore({
  reducer: {
    debug: debugReducer,
    section: sectionReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
