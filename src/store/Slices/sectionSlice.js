import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    sectionType:"",
    code:""
}

const sectionSlice = createSlice({
    name: "sectionType",
    initialState,
    reducers:{
        setSection(state,action){
            state.sectionType = action.payload;
        },
        setCode(state,action){
            state.code = action.payload;
        },

    }
})

export const {setSection,setCode} = sectionSlice.actions;
export default sectionSlice.reducer