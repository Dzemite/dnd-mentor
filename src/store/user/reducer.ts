import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from 'types';

const initialState: UserState = {
  address: '',
  provider: '',
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState: (state, action: PayloadAction<Partial<UserState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { updateUserState } = userReducer.actions;

export default userReducer.reducer;
