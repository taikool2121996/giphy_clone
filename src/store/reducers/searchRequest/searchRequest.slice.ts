import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './searchRequest.initialState';

const searchRequestSlice = createSlice({
  name: 'searchRequest',
  initialState,
  reducers: {
    requestSearchRequest(
      state,
      {}: PayloadAction<{
        q: string;
      }>,
    ) {
      state.error = null;
      state.loading = true;
    },

    requestSearchRequestSuccessful(state, { payload }) {
      state.data = payload;
      state.error = null;
      state.loading = false;
    },

    rrequestSearchRequestFailed(state, { payload }) {
      const { error } = payload;
      state.error = error;
      state.loading = false;
    },
  },
});

export const {
  requestSearchRequest,
  requestSearchRequestSuccessful,
  rrequestSearchRequestFailed,
} = searchRequestSlice.actions;

export default searchRequestSlice.reducer;
