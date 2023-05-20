import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const CoustomerApi = createApi({
    reducerPath: "coustomers",
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
        getCoustomer: builder.query({
            query: (pathname) => ({
                url: `coustomer?${pathname}`,
                method: "GET",
            }),
            providesTags: ['Coustomer']
        }),
        addCoustomer: builder.mutation({
            query: (user) => ({
                url: "coustomer",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["Coustomer"],
        }),
    }),
});
export const { useAddCoustomerMutation,useGetCoustomerQuery } = CoustomerApi;

