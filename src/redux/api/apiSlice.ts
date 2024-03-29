// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000` }),
  endpoints: (builder) => ({
    getMembers: builder.query({
      query: () => `/members`,
    }),
    getNews: builder.query({
      query: () => `/news`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewsQuery } = apiSlice