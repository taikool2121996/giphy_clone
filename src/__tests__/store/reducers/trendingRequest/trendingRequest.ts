// libs
import 'jest';
import { call, put, takeLatest } from 'redux-saga/effects';
// networks
import {
  requestTrendingRequest,
  requestTrendingRequestSuccessful,
} from '@/store/reducers/trendingRequest/trendingRequest.slice';
import trendingRequestApi from '@/services/trendingRequest/trendingRequestApi';
import trendingRequestSaga, {
  requestTrendingRequestSaga,
} from '@/store/reducers/trendingRequest/trendingRequest.saga';

describe('test signupSaga watcher', () => {
  const genObject = trendingRequestSaga();

  it('should wait for latest requestTrendingRequest action and call requestTrendingRequestSaga', () => {
    expect(genObject.next().value).toEqual(
      takeLatest(requestTrendingRequest, requestTrendingRequestSaga),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('test trendingRequestSaga', () => {
  const mockedTrendingRequestData = {
    data: [],
    meta: {},
    panigation: {},
  };

  // if requestTrendingRequestSaga have params
  const generator = requestTrendingRequestSaga();

  it('call function to get trendingRequest data', () => {
    expect(generator.next().value).toEqual(
      call(trendingRequestApi.getTrendingRequest),
    );
  });

  it('successfully', () => {
    const testValue = generator.next(mockedTrendingRequestData).value;
    expect(testValue).toEqual(
      put(requestTrendingRequestSuccessful(mockedTrendingRequestData)),
    );
  });
});
