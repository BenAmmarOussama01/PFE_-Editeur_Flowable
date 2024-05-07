import watchFetchCaseSaga from './saga/caseSaga'
import { all, fork } from 'redux-saga/effects'
import watchFetchProcessSaga from './saga/processSaga'

const rootSaga = function* () {
  yield all([fork(watchFetchCaseSaga), fork(watchFetchProcessSaga)])
}

export default rootSaga
