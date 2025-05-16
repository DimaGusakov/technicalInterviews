
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { db } from '../firebase/firebase'

export const databaseApi = createApi({
  baseQuery: fetchBaseQuery(),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users', 
    }),
    
  }),
})

export const { useGetUsersQuery } = databaseApi