import { configureStore } from '@reduxjs/toolkit'
import ProcessReducer from './processes/processSlice'
import createSagaMiddleware from '@redux-saga/core'
import fetchProcessSaga from './saga/processSaga'
import CaseReducer from './cases/caseSlice'
import rootSaga from './root-sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    process: ProcessReducer,
    case: CaseReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
