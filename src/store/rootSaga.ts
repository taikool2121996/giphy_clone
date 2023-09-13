import { fork } from 'redux-saga/effects';
import baseRequestSaga from './reducers/baseRequest/baseRequest.saga';
import trendingRequestSaga from './reducers/trendingRequest/trendingRequest.saga';
import randomRequestSaga from './reducers/randomRequest/randomRequest.saga';
import searchRequestSaga from './reducers/searchRequest/searchRequest.saga';

export default function* rootSaga() {
  yield fork(baseRequestSaga);
  yield fork(trendingRequestSaga);
  yield fork(randomRequestSaga);
  yield fork(searchRequestSaga);
}
