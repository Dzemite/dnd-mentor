import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "types";
import { loginUser } from "./ActionCreator";


const initialState: UserState = {
  user: null,
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [loginUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled.type]: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
    },
    [loginUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default userSlice.reducer;