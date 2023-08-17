import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    paymentMethods:[]
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers:{
        addPayment(state,action){
            state.paymentMethods.push(action.payload);
        }
    }
})

export const {addPayment} = paymentSlice.actions;
export default paymentSlice.reducer