import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurants } from '../components/Models/Restaurants'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getPratos: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetRestaurantsQuery, useGetPratosQuery } = api
export default api
