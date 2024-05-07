import { APP_BASE_URL } from '../../config/app.constant'
import { invokeWS, MethodHttp } from '../../setup/api-service'
import {
  getFormFetch,
  getFormFailure,
  getFormSuccess,
} from '../form/formSlice'
import { put, all, takeEvery, take } from 'redux-saga/effects'

function* fetchFormHandlerSaga(): Generator<any, void, any> {
  try {
    const result = yield invokeWS({

      url: `${APP_BASE_URL}configuration/modeler/rest/models?filter=forms&modelType=2&sort=modifiedDesc`,
      method: MethodHttp.get,
    })
    yield put(getFormSuccess(result?.data)) // Dispatch success action
  } catch (error) {
    yield put(getFormFailure()) // Dispatch failure action
  }
}

function* fetchFormSaga() {
  yield all([takeEvery(getFormFetch, fetchFormHandlerSaga)])
}

export default fetchFormSaga
