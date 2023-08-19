import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    count:0,
    sections:[],
    usedSections:[],
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
        setUsedBlocks(state,action){
            state.usedSections.push(action.payload);
        },

    }
})

export const {setSection, removeSection, setCount,setUsedBlocks} = sectionSlice.actions;
export default sectionSlice.reducer