import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const ProductApi = createApi({
    reducerPath: "product",
    tagTypes: ['Product', 'Cart'],
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
        /* update product  ===================  */
        updateProduct: builder.mutation({
            query: ({ value, _id }) => ({
                url: `product?_id=${_id}`,
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["Product"],
        }),

        getToCart: builder.query({
            query: () => ({
                url: "cart",
                method: "GET",
            }),
            providesTags: ["Cart"],
        }),

        /*  addd to cart  */
        addToCart: builder.mutation({
            query: (cart) => ({
                url: "cart",
                method: "POST",
                body: cart,
            }),
            invalidatesTags: ["Cart"],
        }),

        deleteToCart: builder.mutation({
            query: (id) => ({
                url: `cart?_id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"],
        }),
        updateToCart: builder.mutation({
            query: ({ quantity, _id, productPrices }) => ({
                url: `cart?_id=${_id}&data=${quantity}&price=${productPrices}`,
                method: "PUT",
            }),
            invalidatesTags: ["Cart"],
        }),
        /* order  */
        addOrder: builder.mutation({
            query: (order) => ({
                url: "order",
                method: "POST",
                body: order,
            }),
            invalidatesTags: ["Cart"],
        }),




        /* add Extra cost  */
        addExtraCost: builder.mutation({
            query: (data) => ({
                url: "product/purchases",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Product"],
        }),







    }),
});
export const { useAddProductMutation, useGetproductQuery, useAddbulkProductMutation, useDeleteProductMutation, useUpdateProductMutation,
    /* cart section */ useGetToCartQuery, useAddToCartMutation, useDeleteToCartMutation, useUpdateToCartMutation,
    /* order   */
    useAddOrderMutation,
    /* extra cost handel */
    useAddExtraCostMutation
} = ProductApi;


