import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './rootReducer'; 
import fetchProcessSaga from './saga/processSaga';
import fetchDecisionSaga from './saga/decisionSaga';
import fetchDecisionServiceSaga from './saga/decisionServiceSaga';
import fetchFormSaga from './saga/formSaga';
import rootSaga from './root-sagas'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run sagas
/*sagaMiddleware.run(fetchProcessSaga);
sagaMiddleware.run(fetchDecisionSaga);
sagaMiddleware.run(fetchDecisionServiceSaga);
sagaMiddleware.run(fetchFormSaga);*/
sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
