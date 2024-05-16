import { APP_BASE_URL } from '../../config/app.constant'
import { invokeWS, MethodHttp } from '../../setup/api-service'
import {
  getDecisionFetch,
  getDecisionFailure,
  getDecisionSuccess,
} from '../slices/decisions/decisionTableSlice'
import { put, all, takeEvery, take } from 'redux-saga/effects'

function* fetchDecisionHandlerSaga(action: any): Generator<any, void, any> {
  const searchText = action.payload.searchText

  try {
    const result = yield invokeWS({
      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=decisionTables&filterText=${searchText}&modelType=4&sort=modifiedDesc`,
      method: MethodHttp.get,
    })
    yield put(getDecisionSuccess(result?.data)) // Dispatch success action
  } catch (error) {
    yield put(getDecisionFailure()) // Dispatch failure action
  }
}

function* watchDecisionSaga() {
  yield all([takeEvery(getDecisionFetch, fetchDecisionHandlerSaga)])
}

export default watchDecisionSaga
