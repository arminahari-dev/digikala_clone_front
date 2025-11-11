// این ماژول پیکربندی پایه RTK Query و apiSlice را فراهم می‌کند.

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    timeout: 60000,
  }),

  tagTypes: ['User', 'Review', 'Details', 'Order', 'Product', 'Category', 'Slider', 'Banner'],
  endpoints: (builder) => ({}),
})

export default apiSlice
