import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const EmployeeApi = createApi({
    reducerPath: "employees",
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
        addEmployee: builder.mutation({
            query: (user) => ({
                url: "employee",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["Employee"],
        }),
    }),
});
export const { useAddEmployeeMutation } = EmployeeApi;

