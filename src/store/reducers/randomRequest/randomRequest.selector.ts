import { RootState } from '../..';

export const selectRandomRequest = (state: RootState): any =>
  state.randomRequest.data.data;

export const selectRandomIsFetching = (state: RootState) =>
  state.randomRequest.loading;
