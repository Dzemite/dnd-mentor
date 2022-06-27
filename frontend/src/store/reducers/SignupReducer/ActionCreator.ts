import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import api from "api/axios";
import { BASE_URL } from "config";
import { IUser } from "types/User";

interface SignupUserCredentials {
  username: string,
  email: string,
  password: string,
  role?: number,
  confirmed?: boolean,
  blocked?: boolean,
}
interface SignupUserResponse {
  data: {
    jwt: string,
    user: IUser
  }
}

export const signupUser = createAsyncThunk(
  'user/signup',
  async (creatorData: SignupUserCredentials, thunkAPI) => {
    try {
      const { data } = await api.post<SignupUserCredentials, SignupUserResponse>(`${BASE_URL}/api/auth/local/register`, creatorData);
      localStorage.setItem('token', data.jwt);

      return data.user;
    } catch (e) {
      console.error(e);
    
      return thunkAPI.rejectWithValue("Не удалось зарегистрировать пользователя")
    }
  }
);