import { createAsyncThunk, SerializedError } from "@reduxjs/toolkit";
import { ErrorResponse } from "@rtk-query/graphql-request-base-query/dist/GraphqlBaseQueryTypes";
import { Exact, SignupMutation, UsersPermissionsRegisterInput } from "generated/graphql";

interface SignupUserCreatorData {
  signupMutationTrigger: (arg: Exact<{data: UsersPermissionsRegisterInput;}>) =>
    Promise<{data: SignupMutation;} | {error: ErrorResponse | SerializedError;}>,
  credentials: SignupUserCredentials, 
}
interface SignupUserCredentials {
  username: string,
  email: string,
  password: string,
}

export const signupUser = createAsyncThunk(
  'user/signup',
  async (creatorData: SignupUserCreatorData, thunkAPI) => {
    const {signupMutationTrigger, credentials} = creatorData;
    const response = await signupMutationTrigger(
      {data: {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      }}
    );
    
    if ((response as {error: ErrorResponse | SerializedError;}).error) {
      return thunkAPI.rejectWithValue('Something went wrong.');
    }

    localStorage.setItem('token', (response as {data: SignupMutation;}).data?.register.jwt);
    return (response as {data: SignupMutation;}).data?.register.user;
  }
);