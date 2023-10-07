import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    count: 0,
    sections: [],
    blocks: []

}

const sectionSlice = createSlice({
    name: "sectionType",
    initialState,
    reducers: {
        setSection(state, action) {
            state.sections.push(action.payload);
        },
        setBlocks(state, action) {
            state.blocks.push(action.payload);
        },
        editBlocks(state, action) {
            state.blocks[0][action.payload] = true
        },
        removeBlocks(state) {
            state.blocks.shift();
        },
        removeSection(state, action) {
            const newData = [...state.sections]
            state.sections = newData.splice(newData.indexOf(action.payload), 1)
        },
        setCount(state, action) {
            state.count += action.payload;
        },

    }
})

export const { setSection, removeSection, setCount, setBlocks, removeBlocks, editBlocks } = sectionSlice.actions;
export default sectionSlice.reducer