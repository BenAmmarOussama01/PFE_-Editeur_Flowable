import { configureStore } from '@reduxjs/toolkit'
import ProcessReducer from './processes/processSlice'
import createSagaMiddleware from '@redux-saga/core'
import fetchProcessSaga from './saga/processSaga'
import DecisionReducer from './decisions/decisionTableSlice'
import fetchDecisionSaga from './saga/decisionSaga'
import DecisionServiceReducer from './decisions/decisionServiceSlice'
import fetchDecisionServiceSaga from './saga/decisionServiceSaga'
import FormReducer from './form/formSlice'
import fetchFormSaga from './saga/formSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    form:FormReducer,
    process: ProcessReducer,
    decission:DecisionReducer,
    decisionService:DecisionServiceReducer,
  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(fetchProcessSaga)
sagaMiddleware.run(fetchDecisionSaga)
sagaMiddleware.run(fetchDecisionServiceSaga)
sagaMiddleware.run(fetchFormSaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
