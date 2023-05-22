import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const AddToCartApi = createApi({
    reducerPath: "carts",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001/",
        prepareHeaders: (headers, { getState }) => {
            const { userInfo: user } = getState().auth;
            if (user?.user?.accessToken) {
                headers.set("authorization", `Bearer ${user?.user?.accessToken}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        /* ===========  add department ===========  */
        getToCart: builder.query({
            query: () => ({
                url: "cart",
                method: "GET",
            }),
            providesTags: ["Cart"],
        }),
        addToCart: builder.mutation({
            query: (cart) => ({
                url: "cart",
                method: "POST",
                body: cart,
            }),
            invalidatesTags: ["Cart"],
        }),
        addOrder: builder.mutation({
            query: (order) => ({
                url: "order",
                method: "POST",
                body: order,
            }),
            invalidatesTags: ["Cart"],
        }),
        /* delete cart product  */
        deleteToCart: builder.mutation({
            query: (id) => ({
                url: `cart?_id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cart"],
        }),
        updateToCart: builder.mutation({
            query: ({ CartQantity, id, CartPrices }) => ({
                url: `cart?_id=${id}&data=${CartQantity}&price=${CartPrices}`,
                method: "PUT",
            }),
            invalidatesTags: ["Cart"],
        }),

    }),
});
export const { useAddToCartMutation, useGetToCartQuery, useAddOrderMutation, useDeleteToCartMutation, useUpdateToCartMutation } = AddToCartApi;

