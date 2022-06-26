import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { BASE_URL } from 'config';
import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(`${BASE_URL}/graphql`);

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({})
});

export default api;