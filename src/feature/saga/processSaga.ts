import { APP_BASE_URL } from '../../config/app.constant'
import { invokeWS, MethodHttp } from '../../setup/api-service'
import {
  getProcess,
  getProcessFailure,
  getProcessSuccess,
} from '../processes/processSlice'
import { put, all, takeEvery, take } from 'redux-saga/effects'

function* fetchProcessHandlerSaga(): Generator<any, void, any> {
  try {
    const result = yield invokeWS({
      //url: 'http://localhost:8070/configuration/modeler/rest/models?filter=processes&modelType=0&sort=modifiedDesc',

      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=processes&modelType=0&sort=modifiedDesc`,
      method: MethodHttp.get,
    })
    yield put(getProcessSuccess(result?.data)) // Dispatch success action
  } catch (error) {
    yield put(getProcessFailure()) // Dispatch failure action
  }
}

function* watchFetchProcessSaga() {
  yield takeEvery(getProcess, fetchProcessHandlerSaga)
}

export default watchFetchProcessSaga
