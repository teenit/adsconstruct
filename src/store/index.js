import { configureStore } from "@reduxjs/toolkit";
import balansSlice from "./Slices/balansSlice";
import logSlice from "./Slices/logSlice";
import userSlice from "./Slices/userSlice";
import sectionSlice from "./Slices/sectionSlice";
import paymentSlice from "./Slices/paymentSlice";



export const store = configureStore({
    reducer:{
        tvmpCoin:balansSlice,
        log:logSlice,
        user:userSlice,
        sections:sectionSlice,
        payment:paymentSlice,
    }
})