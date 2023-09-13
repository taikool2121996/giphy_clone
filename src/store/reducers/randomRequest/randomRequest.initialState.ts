import { Nullable } from './../../../utils/common/types';

export type InitialState = {
  data: any;
  error: Nullable<string>;
  loading: boolean;
};

export const initialState: InitialState = {
  data: [],
  error: '',
  loading: false,
};
