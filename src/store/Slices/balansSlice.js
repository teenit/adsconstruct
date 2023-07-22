import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    tvmpCoin:200
}

const balansSlice = createSlice({
    name: "tvmpCoin",
    initialState,
    reducers:{
        addBalans(state, action){

            let coins = state.tvmpCoin + action.payload ;

            state.tvmpCoin = coins;
        },
        minusBalans(state,action){

            let coins = state.tvmpCoin - action.payload ;

            state.tvmpCoin = coins;
        }
    }
})

export const {addBalans, minusBalans} = balansSlice.actions;
export default balansSlice.reducer