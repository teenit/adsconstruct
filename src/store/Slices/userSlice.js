import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    color: "#1565c0",
    colorHover:"#8b8bd6",
    token:"",
    nickname:"",
    email:"",
    pass:"",
    name:"",
    surname:"",
    date:"",
    bio:""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setColor(state,action){
            state.color = action.payload;
            state.colorHover = state.color+"77"
        },
        setProfile(state,action){
            state.token = action.payload.token
            state.nickname = action.payload.nickname
            state.email = action.payload.email
            state.pass = action.payload.pass
            state.name = action.payload.name
            state.surname = action.payload.surname
            state.date = action.payload.date
            state.bio = action.payload.bio
        }
    }
})

export const {setColor,setProfile} = userSlice.actions;
export default userSlice.reducer