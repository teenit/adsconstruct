import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    stats:"",
    account:"account",
    sections:"",
    slots:"",
    settings:"",
}

const profileModalSlice = createSlice({
    name: "profileModal",
    initialState,
    reducers:{
        setStats(state, action){
            state.stats = action.payload;
        },
        setAccount(state, action){
            state.account = action.payload;
        },
        setSections(state, action){
            state.sections = action.payload;
        },
        setSlots(state, action){
            state.slots = action.payload;
        },
        setSettings(state, action){
            state.settings = action.payload;
        },
    }
})

export const {setStats, setAccount, setSections, setSlots, setSettings} = profileModalSlice.actions;
export default profileModalSlice.reducer