import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const CategoriesApi = createApi({
    reducerPath: "categories",
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
        /* ===========  add department ===========  */
        getCategories: builder.query({
            query: () => ({
                url: "categories",
                method: "GET",
            }),
            providesTags: ['Categories']
        }),
        addCategories: builder.mutation({
            query: (Categories) => ({
                url: "categories",
                method: "POST",
                body: Categories,
            }),
            invalidatesTags: ["Categories"],
        }),
        queryCategories: builder.mutation({
            query: (Categories) => ({
                url: `categories?_id=${Categories}`,
                method: "GET",
            }),
            invalidatesTags: ["Categories"],
        }),
        /* seleter Category */
        deleteCategories: builder.mutation({
            query: (Categories) => ({
                url: `categories?categoty_id=${Categories}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Categories"],
        }),


    }),
});
export const { useGetCategoriesQuery, useAddCategoriesMutation, useQueryCategoriesMutation,useDeleteCategoriesMutation } = CategoriesApi;

