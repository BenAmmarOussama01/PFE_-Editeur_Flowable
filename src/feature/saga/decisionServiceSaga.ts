import { APP_BASE_URL } from '../../config/app.constant'
import { invokeWS, MethodHttp } from '../../setup/api-service'
import {
  getDecisionFetch,
  getDecisionFailure,
  getDecisionSuccess,
} from '../decisions/decisionServiceSlice'
import { put, all, takeEvery, } from 'redux-saga/effects'

function* fetchDecisionHandlerSaga(): Generator<any, void, any> {
  try {
      console.log("hello")
    const result = yield invokeWS({
      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=decisionServices&modelType=6&sort=modifiedDesc`,
      method: MethodHttp.get,
    })
    yield put(getDecisionSuccess(result?.data)) // Dispatch success action
  } catch (error) {
    yield put(getDecisionFailure()) // Dispatch failure action
  }
}

function* fetchDecisionServiceSaga() {
  yield all([takeEvery(getDecisionFetch, fetchDecisionHandlerSaga)])
}

export default fetchDecisionServiceSaga
