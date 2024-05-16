import { APP_BASE_URL } from '../../config/app.constant'
import { invokeWS, MethodHttp } from '../../setup/api-service'
import {
  getFormFetch,
  getFormFailure,
  getFormSuccess,
} from '../slices/form/formSlice'
import { put, all, takeEvery, take } from 'redux-saga/effects'

function* fetchFormHandlerSaga(action: any): Generator<any, void, any> {
  const searchText = action.payload.searchText

  try {
    const result = yield invokeWS({
      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=forms&filterText=${searchText}&modelType=2&sort=modifiedDesc`,
      method: MethodHttp.get,
    })
    yield put(getFormSuccess(result?.data)) // Dispatch success action
  } catch (error) {
    yield put(getFormFailure()) // Dispatch failure action
  }
}

function* watchFormSaga() {
  yield all([takeEvery(getFormFetch, fetchFormHandlerSaga)])
}

export default watchFormSaga
