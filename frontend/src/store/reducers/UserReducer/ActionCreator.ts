import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { ErrorResponse } from "@rtk-query/graphql-request-base-query/dist/GraphqlBaseQueryTypes";
import { Exact, LoginMutation, UsersPermissionsLoginInput } from "generated/graphql";

interface LoginUserCreatorData {
  loginMutationTrigger: (arg: Exact<{data: UsersPermissionsLoginInput;}>) =>
    Promise<{data: LoginMutation;} | {error: ErrorResponse | SerializedError;}>,
  credentials: LoginUserCredentials, 
}
interface LoginUserCredentials {
  email: string,
  password: string,
}

export const loginUser = createAsyncThunk(
  'user/login',
  async (creatorData: LoginUserCreatorData, thunkAPI) => {
    const {loginMutationTrigger, credentials} = creatorData;
    const response = await loginMutationTrigger({data: {identifier: credentials.email, password: credentials.password}});
    
    if ((response as {error: ErrorResponse | SerializedError;}).error) {
      return thunkAPI.rejectWithValue('Something went wrong.');
    }

    localStorage.setItem('token', (response as {data: LoginMutation;}).data?.login.jwt);
    return (response as {data: LoginMutation;}).data?.login.user;
  }
);