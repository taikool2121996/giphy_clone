import {
  requestSearchRequest,
  requestSearchRequestSuccessful,
  rrequestSearchRequestFailed,
} from '@/store/reducers/searchRequest/searchRequest.slice';
import searchRequestApi from '../../../services/searchRequest/searchRequestApi';
import { put, takeLatest, call } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

export function* requestSearchRequestSaga({
  payload,
}: PayloadAction<{
  q: string;
}>) {
  try {
    const { q } = payload;
    // @ts-ignore
    const response = yield call(searchRequestApi.getSearchRequest, q);
    yield put(requestSearchRequestSuccessful(response));
  } catch (e) {
    console.log('request failed : ', e);
    yield put(rrequestSearchRequestFailed(e));
  }
}

export default function* searchRequestSaga() {
  yield takeLatest(requestSearchRequest, requestSearchRequestSaga);
}
