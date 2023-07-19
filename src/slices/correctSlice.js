import { createSlice } from "@reduxjs/toolkit";

const correctSlice = createSlice({
    initialState: {
        correct: 0
    },
    name:"correct",
    reducers:{
        correctfunc: (state, {payload})=>{
            state= {correct:state.correct + payload}
            return state
        }
            
    }
})

export const correctReducers = correctSlice.reducer
export const {correctfunc} = correctSlice.actions