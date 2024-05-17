import watchFetchCaseSaga from './saga/caseSaga'
import { all, fork } from 'redux-saga/effects'
import watchFetchProcessSaga from './saga/processSaga'
import watchDecisionSaga from './saga/decisionSaga'
import watchFormSaga from './saga/formSaga'
import watchDecisionServiceSaga from './saga/decisionServiceSaga'
import watchAppSaga from './saga/appSaga'
const rootSaga = function* () {
  yield all([
    fork(watchFetchCaseSaga),
    fork(watchFetchProcessSaga),
    fork(watchDecisionSaga),
    fork(watchFormSaga),
    fork(watchDecisionServiceSaga),
    fork(watchAppSaga),
  ])
}

export default rootSaga
