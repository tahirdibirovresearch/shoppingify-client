import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getToken from '../../helpers/getToken'


export const productApi  = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://shoppingify-server-by-tahir.onrender.com/user',
    prepareHeaders: headers => {
     
  
      const token = getToken()
      
        headers.set('authorization', `Bearer ${token}`)
       
  
      return headers
    }}),
    tagTypes: ['Product'],
   
    endpoints: (build) => ({
      getProductcs: build.query({
        query: ()=> `products`,
        providesTags: ['Product']
      }),
      setProduct: build.mutation({
        query: (product) => ({
          url: 'products',
          method: 'POST',
          body: product
        }),
        invalidatesTags: ['Product'],
      }),
      deleteProduct: build.mutation({
        query: (id) => ({
          url: `products/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags: (result, error, id) => [{ type: 'Product', id }],
      })
    })
  })
    
  
  
  


export const { useGetProductcsQuery, useSetProductMutation } = productApi