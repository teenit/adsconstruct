import { configureStore } from "@reduxjs/toolkit";
import balansSlice from "./Slices/balansSlice";
import logSlice from "./Slices/logSlice";
import userSlice from "./Slices/userSlice";
import sectionSlice from "./Slices/sectionSlice";



export const store = configureStore({
    reducer:{
        tvmpCoin:balansSlice,
        log:logSlice,
        user:userSlice,
        sectionType:sectionSlice,
    }
})