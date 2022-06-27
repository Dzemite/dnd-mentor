import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import api from "api/axios";
import { BASE_URL } from "config";
import { IUser } from "types/User";

export const addUser = createAction<IUser>('add/user');

export const fetchUser = createAsyncThunk(
  'fetch/user',
  async (id: string, thunkAPI) => {
    try {
      const response = await api.get<IUser>(`${BASE_URL}/api/users/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token') || ''}`
        }
      });

      return response.data;
    } catch (e) {
      console.error(e);

      return thunkAPI.rejectWithValue("Не удалось загрузить пользователя")
    }
  }
);
