import { APP_BASE_URL } from '../../config/app.constant'
import { invokeWS, MethodHttp } from '../../setup/api-service'

import {
  getCase,
  getCaseSuccess,
  getCaseFailure,
} from '../slices/cases/caseSlice'
import { put, takeEvery } from 'redux-saga/effects'

function* fetchCaseHandlerSaga(): Generator<any, void, any> {
  console.log('hellllo')
  try {
    const result = yield invokeWS({
      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=cases&modelType=5&sort=modifiedDesc`,
      method: MethodHttp.get,
    })
    console.log('res : ', result)
    yield put(getCaseSuccess(result?.data)) // Dispatch success action
  } catch (error) {
    yield put(getCaseFailure()) // Dispatch failure action
  }
}

function* watchFetchCaseSaga() {
  yield takeEvery(getCase, fetchCaseHandlerSaga)
}

export default watchFetchCaseSaga
