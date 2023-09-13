import { RootState } from '../..';

export const selectSearchRequest = (state: RootState): any =>
  state.searchRequest.data.data;

export const selectSearchIsFetching = (state: RootState) =>
  state.searchRequest.loading;
