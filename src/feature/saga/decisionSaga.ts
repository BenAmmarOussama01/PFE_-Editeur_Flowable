import { APP_BASE_URL } from '../../config/app.constant'
import { invokeWS, MethodHttp } from '../../setup/api-service'
import {
  getDecisionFetch,
  getDecisionFailure,
  getDecisionSuccess,
} from '../decisions/decisionTableSlice'
import { put, all, takeEvery, take } from 'redux-saga/effects'

function* fetchDecisionHandlerSaga(): Generator<any, void, any> {
  try {
    const result = yield invokeWS({
      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=decisionTables&modelType=4&sort=modifiedDesc`,
      method: MethodHttp.get,
    })
    yield put(getDecisionSuccess(result?.data)) // Dispatch success action
  } catch (error) {
    yield put(getDecisionFailure()) // Dispatch failure action
  }
}

function* fetchDecisionSaga() {
  yield all([takeEvery(getDecisionFetch, fetchDecisionHandlerSaga)])
}

export default fetchDecisionSaga