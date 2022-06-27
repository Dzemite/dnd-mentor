import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "config";
import { ILoginReq } from "types/requests";
import { IUserCreateReq, IUserUpdateReq } from "types/requests/user";
import { ILoginRes, IUserCreateRes, IUserUpdateRes } from "types/responses";
import { IUser } from "types/User";

export const userAPI = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes: ['User'],
    endpoints: (build) => ({
        // fetchAllPosts: build.query<IPost[], number>({
        //     query: (limit: number = 5) => ({
        //         url: `/posts`,
        //         params: {
        //             _limit: limit
        //         }
        //     }),
        //     providesTags: result => ['Post']
        // }),
        fetchUser: build.query<IUser, string>({
          query: (id: string) => ({
            url: `/api/users/${id}`,
            method: 'GET',
            headers: {
              authorization: `Bearer ${localStorage.getItem('token') || ''}`
            }
          }),
          providesTags: result => ['User']
        }),
        createUser: build.mutation<IUserCreateRes, IUserCreateReq>({
          query: (user) => ({
            url: `/api/users`,
            method: 'POST',
            body: user
          }),
          invalidatesTags: ['User']
        }),
        updateUser: build.mutation<IUserUpdateRes, IUserUpdateReq>({
          query: (user) => ({
            url: `/api/users/${user.id}`,
            method: 'PUT',
            body: user
          }),
          invalidatesTags: ['User']
        }),
        deleteUser: build.mutation<IUser, number>({
          query: (userId) => ({
            url: `/api/users/${userId}`,
            method: 'DELETE',
          })
        }),
        authUser: build.mutation<ILoginRes, ILoginReq>({
          query: (credentials) => ({
            url: '/api/auth/local',
            method: 'POST',
            body: credentials
          }),
          invalidatesTags: ['User']
        }),
    })
})
