import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// users service
export const AddToCartApi = createApi({
    reducerPath: "carts",
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
        

    }),
});
export const {  } = AddToCartApi;

