import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "types";
import { IUser } from "types/User";
import { addUser, fetchUser } from "./ActionCreator";


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
    [addUser.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    [fetchUser.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [fetchUser.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [fetchUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default userSlice.reducer;