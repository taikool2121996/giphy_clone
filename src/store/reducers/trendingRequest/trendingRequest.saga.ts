import {
  requestTrendingRequest,
  requestTrendingRequestSuccessful,
  requestTrendingRequestFailed,
} from '@/store/reducers/trendingRequest/trendingRequest.slice';
import trendingRequestApi from '@/services/trendingRequest/trendingRequestApi';
import { put, takeLatest, call } from 'redux-saga/effects';

export function* requestTrendingRequestSaga() {
  try {
    // @ts-ignore
    const response = yield call(trendingRequestApi.getTrendingRequest);
    yield put(requestTrendingRequestSuccessful(response));
  } catch (e) {
    console.log('request failed : ', e);
    yield put(requestTrendingRequestFailed(e));
  }
}

export default function* baseRequestSaga() {
  yield takeLatest(requestTrendingRequest, requestTrendingRequestSaga);
}
