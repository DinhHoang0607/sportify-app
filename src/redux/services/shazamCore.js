import {
   createApi,
   fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

export const shazamCoreApi = createApi({
   reducerPath: 'shazamCoreApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://shazam.p.rapidapi.com',
      prepareHeaders: (headers) => {
         headers.set(
            'X-RapidAPI-Key',
            'c8ec6a1bc8mshc7897e6c0113120p1a4120jsn8d467f3f480d'
         )
         return headers
      },
   }),
   endpoints: (builder) => ({
      getTopCharts: builder.query({
         query: () => '/charts/track',
      }),
   }),
})
export const {useGetTopChartsQuery} = shazamCoreApi
