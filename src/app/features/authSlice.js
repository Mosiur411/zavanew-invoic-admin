import { createSlice } from "@reduxjs/toolkit";

// auth slice
const authSlice = createSlice({
    name: "auth",
    initialState: {
        userInfo: null,
    },
    reducers: {
        setToken: (state, {payload}) => {
            state.userInfo = payload
        }
    },
});
export const { setToken } = authSlice.actions;
export default authSlice.reducer;
