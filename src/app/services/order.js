import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const OrderApi = createApi({
    reducerPath: "orders",
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
            query: (id) => ({
                url: `order?id=${id}`,
                method: "GET",
            }),
            providesTags: ["Order"],
        }),
        getRrecord: builder.query({
            query: () => ({
                url: `dashboard`,
                method: "GET",
            }),
            invalidatesTags: ["Order"],
        }),
    }),






});
export const { useGetToOrderQuery,useGetRrecordQuery } = OrderApi;

