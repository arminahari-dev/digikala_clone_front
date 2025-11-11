// این فایل اندپوینت نمونه/placeholder برای تست و توسعه را مدیریت می‌کند.
import baseApi from '@/services/baseApi'

import type { CreatePlaceholderResult, CreatePlaceholderQuery } from './types'

export const placeholderApiSlice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPlaceholder: builder.mutation<CreatePlaceholderResult, CreatePlaceholderQuery>({
      query: ({ imageUrl }) => ({
        url: '/api/placeholder',
        method: 'POST',
        body: imageUrl,
      }),
    }),
  }),
})

export const { useCreatePlaceholderMutation } = placeholderApiSlice
