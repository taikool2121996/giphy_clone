import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './randomRequest.initialState';

const randomRequestSlice = createSlice({
  name: 'randomRequest',
  initialState,
  reducers: {
    requestRandomRequest(state) {
      state.error = null;
      state.loading = true;
    },

    requestRandomRequestSuccessful(state, { payload }) {
      state.data = payload;
      state.error = null;
      state.loading = false;
    },

    requestRandomRequestFailed(state, { payload }) {
      const { error } = payload;
      state.error = error;
      state.loading = false;
    },
  },
});

export const {
  requestRandomRequest,
  requestRandomRequestSuccessful,
  requestRandomRequestFailed,
} = randomRequestSlice.actions;

export default randomRequestSlice.reducer;
