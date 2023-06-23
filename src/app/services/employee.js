import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const EmployeeApi = createApi({
    reducerPath: "employees",
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
        getemployee: builder.query({
            query: (pathname) => ({
                url: `employee?${pathname}`,
                method: "GET",
            }),
            providesTags: ['Employee']
        }),

        addEmployee: builder.mutation({
            query: (user) => ({
                url: "employee",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["Employee"],
        }),
        /* update product */
        updateEmployee: builder.mutation({
            query: ({ value, _id }) => ({
                url: `employee?_id=${_id}`,
                method: "PUT",
                body: value,
            }),
            invalidatesTags: ["Employee"],
        }),

        deleteEmployee: builder.mutation({
            query: (employee) => ({
                url: `employee?_id=${employee}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Employee"],
        }),
    }),
});
export const { useAddEmployeeMutation, useGetemployeeQuery, useDeleteEmployeeMutation,useUpdateEmployeeMutation } = EmployeeApi;

