import {
  requestRandomRequest,
  requestRandomRequestSuccessful,
  requestRandomRequestFailed,
} from '@/store/reducers/randomRequest/randomRequest.slice';
import randomRequestApi from '@/services/randomRequest/randomRequestApi';
import { put, takeLatest, call } from 'redux-saga/effects';

export function* requestRandomRequestSaga() {
  try {
    // @ts-ignore
    const response = yield call(randomRequestApi.getRandomRequest);
    yield put(requestRandomRequestSuccessful(response));
  } catch (e) {
    console.log('request failed : ', e);
    yield put(requestRandomRequestFailed(e));
  }
}

export default function* baseRequestSaga() {
  yield takeLatest(requestRandomRequest, requestRandomRequestSaga);
}
