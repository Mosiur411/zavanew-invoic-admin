import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const SalesApi = createApi({
    reducerPath: "sales",
    tagTypes: ['Sales'],
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
        getSales: builder.query({
            query: (url) => ({
                url: `sales?${url}`,
                method: "GET",
            }),
            providesTags: ["Sales"],
        }),
        getSingleSales: builder.query({
            query: (id) => ({
                url: `sales/single?${id}`,
                method: "GET",
            }),
            providesTags: ["Sales"],
        }),
        /* order Approved Shipped Delivered action */
        salesSatatus: builder.mutation({
            query: ({ status, id }) => ({
                url: `sales/status?_id=${id}&status=${status}`,
                method: "PUT",
            }),
            invalidatesTags: ["Sales"],
        }),
        /* payment update  */
        salesPayment: builder.mutation({
            query: ({ value, id }) => ({
                url: `sales/payment?_id=${id}`,
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["Sales"],
        }),

        /* refund */
        addRefund: builder.mutation({
            query: (value) => ({
                url: "refund",
                method: "POST",
                body: value
            }),
            invalidatesTags: ["Sales"],
        }),
        /* Shrinkage  */
        addShrinkage: builder.mutation({
            query: (value) => ({
                url: "shrinkage",
                method: "POST",
                body: value
            }),
            invalidatesTags: ["Sales"],
        }),

    }),

});
export const { useGetSalesQuery, useSalesSatatusMutation, useGetSingleSalesQuery, useAddRefundMutation, useAddShrinkageMutation,useSalesPaymentMutation} = SalesApi;

