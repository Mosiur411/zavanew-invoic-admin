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
            query: ({ value, id, coustomerId }) => ({
                url: `order?id=${id}&coustomerId=${coustomerId}`,
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["Order", "dashboard"],
        }),
        /* delete order */
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `Order?_id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Order"],
        }),
        addItemsOrder: builder.mutation({
            query: ({ item, order_id }) => ({
                url: `Order/update/item/add?order_id=${order_id}`,
                method: "PUT",
                body: item,

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
        /* order Approved Shipped Delivered action */
        removeOrderAddSales: builder.mutation({
            query: ({ status, order_id }) => ({
                url: `order/status?order_id=${order_id}&status=${status}`,
                method: "POST",

            }),
            invalidatesTags: ["Order"],
        }),

        UpdateItemsOrder: builder.mutation({
            query: ({ item_id, order_id, editQuantity, editPrices }) => ({
                url: `Order/update/items?item_id=${item_id}&order_id=${order_id}&editQuantity=${editQuantity}&editPrices=${editPrices}`,
                method: "PUT",
            }),
            invalidatesTags: ["Order"],
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
    useAddItemsOrderMutation,
    useRemoveOrderAddSalesMutation,
    /* refund  */
    /* addRhrinkage  */
    useDeleteItemsOrderMutation,
    useUpdateItemsOrderMutation

} = OrderApi;

