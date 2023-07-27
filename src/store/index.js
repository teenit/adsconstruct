import { configureStore } from "@reduxjs/toolkit";
import balansSlice from "./Slices/balansSlice";
import logSlice from "./Slices/logSlice";
import userSlice from "./Slices/userSlice";



export const store = configureStore({
    reducer:{
        tvmpCoin:balansSlice,
        log:logSlice,
        user:userSlice
    }
})