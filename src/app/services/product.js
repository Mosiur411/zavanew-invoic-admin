import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const ProductApi = createApi({
    reducerPath: "product",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://zavanew-invoic-server.vercel.app/",
        prepareHeaders: (headers, { getState }) => {
            const { userInfo: user } = getState().auth;
            if (user?.user?.accessToken) {
                headers.set("authorization", `Bearer ${user?.user?.accessToken}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        /* ===========  add product ===========  */
        getproduct: builder.query({
            query: (pathname) => ({
                url: `product?${pathname}`,
                method: "GET",
            }),
            providesTags: ['Product']
        }),
        addProduct: builder.mutation({
            query: (product) => ({
                url: "product",
                method: "POST",
                body: product,
            }),
            invalidatesTags: ["Product"],
        }),
        addbulkProduct: builder.mutation({
            query: (product) => ({
                url: "product/bulk",
                method: "POST",
                body: product,
            }),
            invalidatesTags: ["Product"],
        }),
        queryProduct: builder.mutation({
            query: (product) => ({
                url: `product?_id=${product}`,
                method: "GET",
            }),
            invalidatesTags: ["Product"],
        }),
        /* =================== Delete ===================== */
        deleteProduct: builder.mutation({
            query: (product) => ({
                url: `product?_id=${product}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"],
        }),
        /* update product  */
        updateProduct: builder.mutation({
            query: ({value,_id}) => ({
                url: `product?_id=${_id}`,
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["Product"],
        }),



    }),
});
export const { useAddProductMutation, useGetproductQuery, useAddbulkProductMutation, useDeleteProductMutation,useUpdateProductMutation } = ProductApi;

