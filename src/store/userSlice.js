import { createSlice } from "@reduxjs/toolkit";

const userSlide = createSlice({
    name: "user",
    initialState: {
        userName: ''
    },
    reducers: {
        increment(state, action){
            console.log(action.payload.text);
            state.userName = state.counter + 1;
        },
    }
})