import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const ChildSubCategoriesApi = createApi({
    reducerPath: "subcategories",
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
        getChildSubCategories: builder.query({
            query: () => ({
                url: "childSubCategories",
                method: "GET",
            }),
            providesTags: ['ChildSubCategories']
        }),
        addChildSubCategories: builder.mutation({
            query: (childSubCategories) => ({
                url: "childSubCategories",
                method: "POST",
                body: childSubCategories,
            }),
            invalidatesTags: ["ChildSubCategories"],
        }),
        queryChildSubCategories: builder.mutation({
            query: (Categories) => ({
                url: `childSubCategories?_id=${Categories}`,
                method: "GET",
            }),
            invalidatesTags: ["ChildSubCategories"],
        }),
        /*=============  delete =============  */
        deleteChildSubCategories: builder.mutation({
            query: (id) => ({
                url: `childSubCategories?_id=${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["SubCategories"],
        }),
    }),
});
export const { useAddChildSubCategoriesMutation, useGetChildSubCategoriesQuery, useQueryChildSubCategoriesMutation,useDeleteChildSubCategoriesMutation } = ChildSubCategoriesApi;

