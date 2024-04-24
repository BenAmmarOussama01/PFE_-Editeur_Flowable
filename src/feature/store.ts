import { configureStore } from '@reduxjs/toolkit'
import ProcessReducer from './processes/processSlice'
import createSagaMiddleware from '@redux-saga/core'
import fetchProcessSaga from './saga/processSaga'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    process: ProcessReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(fetchProcessSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
