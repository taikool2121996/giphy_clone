import { RootState } from '../..';

export const selectTrendingRequest = (state: RootState): any =>
  state.trendingRequest.data.data;

export const selectTrendingIsFetching = (state: RootState) =>
  state.trendingRequest.loading;
