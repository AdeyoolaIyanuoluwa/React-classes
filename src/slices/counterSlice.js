import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState: {
        count:0,
    },
    name: "counter",
    reducers:{  //reducers are actions or functions
        increase:(state)=>{
            state = {count: state.count + 1}
            return state
        },
        increaseByAmount: (state, {payload})=>{
            state = {count: state.count + payload}
            return state
        },
    }
})

export const counterReducer =counterSlice.reducer
export const {increase} = counterSlice.actions
export const {increaseByAmount} = counterSlice.actions