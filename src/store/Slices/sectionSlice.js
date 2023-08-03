import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    sectionType:[],
}

const sectionSlice = createSlice({
    name: "sectionType",
    initialState,
    reducers:{
        setSection(state,action){
            state.sectionType.push(action.payload);
        },

    }
})

export const {setSection} = sectionSlice.actions;
export default sectionSlice.reducer