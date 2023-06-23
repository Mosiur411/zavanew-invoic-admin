import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const OrderApi = createApi({
    reducerPath: "orders",
    tagTypes: ['Order', 'dashboard', 'refund', 'shrinkage'],
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
        getToOrder: builder.query({
            query: (pathname) => ({
                url: `order?${pathname}`,
                method: "GET",
            }),
            providesTags: ["Order"],
        }),
        getAllInvoce: builder.query({
            query: (pathname) => ({
                url: `order/invoice?${pathname}`,
                method: "GET",
            }),
            providesTags: ["Order"],
        }),
        updateOrder: builder.mutation({
            query: ({ value, id }) => ({
                url: `order?id=${id}`,
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["Order", "dashboard"],
        }),
        /* dlete order */
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `Order?_id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Order"],
        }),

        /* update order and Order itms delete,add */
        deleteItemsOrder: builder.mutation({
            query: ({ item_id, order_id }) => ({
                url: `Order/update/items?item_id=${item_id}&order_id=${order_id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Order"],
        }),

        /* refund  */
        addRefund: builder.mutation({
            query: (value) => ({
                url: "refund",
                method: "POST",
                body: value
            }),
            invalidatesTags: ["Order", "dashboard"],
        }),
        /* Shrinkage  */
        addShrinkage: builder.mutation({
            query: (value) => ({
                url: "shrinkage",
                method: "POST",
                body: value
            }),
            invalidatesTags: ["dashboard"],
        }),
        /* dashboard */
        getRrecord: builder.query({
            query: (date) => ({
                url: `dashboard?${date}`,
                method: "GET",
            }),
            providesTags: ['dashboard'],
        }),

    }),

});
export const { useGetToOrderQuery, useGetRrecordQuery,
    useUpdateOrderMutation,
    useGetAllInvoceQuery,
    useDeleteOrderMutation,
    /* refund  */
    useAddRefundMutation,
    /* addRhrinkage  */
    useAddShrinkageMutation,
    useDeleteItemsOrderMutation


} = OrderApi;

