import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './trendingRequest.initialState';

const trendingRequestSlice = createSlice({
  name: 'trendingRequest',
  initialState,
  reducers: {
    requestTrendingRequest(state) {
      state.error = null;
      state.loading = true;
    },

    requestTrendingRequestSuccessful(state, { payload }) {
      state.data = payload;
      state.error = null;
      state.loading = false;
    },

    requestTrendingRequestFailed(state, { payload }) {
      const { error } = payload;
      state.error = error;
      state.loading = false;
    },
  },
});

export const {
  requestTrendingRequest,
  requestTrendingRequestSuccessful,
  requestTrendingRequestFailed,
} = trendingRequestSlice.actions;

export default trendingRequestSlice.reducer;
