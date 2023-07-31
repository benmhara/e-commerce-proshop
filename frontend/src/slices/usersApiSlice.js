import { USERS_URL } from '../constants'
import { apiSlice } from './apiSlice'

const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: { email, password },
      }),
    }),
  }),
})

export const { useLoginMutation } = usersApiSlice
