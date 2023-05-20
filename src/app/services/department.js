import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const DepartmentApi = createApi({
    reducerPath: "departments",
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
        getDepartment: builder.query({
            query: () => ({
                url: "development",
                method: "GET",
            }),
            providesTags: ['Development']
        }),
        addDepartment: builder.mutation({
            query: (development) => ({
                url: "development",
                method: "POST",
                body: development,
            }),
            invalidatesTags: ["Development"],
        }),
        /* delete Depatment  */
        deleteDepartment: builder.mutation({
            query: (id) => ({
                url: `development?development_id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Development"],
        }),




    }),
});
export const { useGetDepartmentQuery, useAddDepartmentMutation, useDeleteDepartmentMutation } = DepartmentApi;

