import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegisterState } from "types/store/registerState";
import { signupUser } from "./ActionCreator";


const initialState: RegisterState = {
  isLoading: false,
  error: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [signupUser.fulfilled.type]: (state, action: PayloadAction) => {
      state.isLoading = false;
      state.error = '';
    },
    [signupUser.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export default userSlice.reducer;