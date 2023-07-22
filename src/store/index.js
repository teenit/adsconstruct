import { configureStore } from "@reduxjs/toolkit";
import balansSlice from "./Slices/balansSlice";



export const store = configureStore({
    reducer:{
        tvmpCoin:balansSlice
    }
})