import { APP_BASE_URL } from '../../config/app.constant'
import { invokeWS, MethodHttp } from '../../setup/api-service'

import { put, all, takeEvery, take } from 'redux-saga/effects'
import { getAppFailure, getAppFetch, getAppSuccess } from '../slices/app/appSlice'

function* fetchAppHandlerSaga(action: any): Generator<any, void, any> {
  const searchText = action.payload.searchText
  try {
    const result = yield invokeWS({
      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=apps&filterText=${searchText}&modelType=3&sort=modifiedDesc`,
      method: MethodHttp.get,
    })
    yield put(getAppSuccess(result?.data)) // Dispatch success action
  } catch (error) {
    yield put(getAppFailure()) // Dispatch failure action
  }
}

function* watchAppSaga() {
  yield all([takeEvery(getAppFetch, fetchAppHandlerSaga)])
}

export default watchAppSaga