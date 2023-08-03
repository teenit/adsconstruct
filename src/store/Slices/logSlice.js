import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    log:true
}

const logSlice = createSlice({
    name: "log",
    initialState,
    reducers:{
        setLog(state,action){
            state.log = action.payload;
        }
    }
})

export const {setLog} = logSlice.actions;
export default logSlice.reducer