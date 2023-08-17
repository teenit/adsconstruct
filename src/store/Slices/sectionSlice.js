import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    count:0,
    sections:[],
}

const sectionSlice = createSlice({
    name: "sectionType",
    initialState,
    reducers:{
        setSection(state,action){
            state.sections.push(action.payload);
        },
        removeSection(state,action){
            const newData = [...state.sections]
            state.sections = newData.splice(newData.indexOf(action.payload),1)
        },
        setCount(state,action){
            state.count+=action.payload;
        },

    }
})

export const {setSection, removeSection, setCount} = sectionSlice.actions;
export default sectionSlice.reducer