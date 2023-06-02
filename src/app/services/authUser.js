import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const AuthApi = createApi({
    reducerPath: "user",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://zavanew-invoic-server.vercel.app/",
    }),
    endpoints: (builder) => ({
        addUser: builder.mutation({
            query: (user) => ({
                url: "register",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),
    }),
});
export const { useAddUserMutation } = AuthApi;

