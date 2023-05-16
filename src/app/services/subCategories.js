import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const SubCategoriesApi = createApi({
    reducerPath: "sub",
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
        getSubCategories: builder.query({
            query: () => ({
                url: "subCategories",
                method: "GET",
            }),
            providesTags: ['SubCategories']
        }),
        addSubCategories: builder.mutation({
            query: (Categories) => ({
                url: "subCategories",
                method: "POST",
                body: Categories,
            }),
            invalidatesTags: ["SubCategories"],
        }),
        querySubCategories: builder.mutation({
            query: (Categories) => ({
                url: `subCategories?_id=${Categories}`,
                method: "GET",
            }),
            invalidatesTags: ["SubCategories"],
        }),
        /*=============  delete =============  */
        deleteSubCategories: builder.mutation({
            query: (id) => ({
                url: `subCategories?_id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["SubCategories"],
        }),
    }),
});
export const { useAddSubCategoriesMutation, useGetSubCategoriesQuery, useQuerySubCategoriesMutation,useDeleteSubCategoriesMutation} = SubCategoriesApi;

