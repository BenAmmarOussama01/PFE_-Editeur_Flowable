
import { all, fork } from 'redux-saga/effects'
import watchFetchProcessSaga from './saga/processSaga'
import fetchProcessSaga from './saga/processSaga';
import fetchDecisionSaga from './saga/decisionSaga';
import fetchDecisionServiceSaga from './saga/decisionServiceSaga';
import fetchFormSaga from './saga/formSaga';

const rootSaga = function* () {
  yield all([fork(watchFetchProcessSaga)])
}


export default rootSaga