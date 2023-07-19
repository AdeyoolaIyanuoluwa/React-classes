import { createSlice } from "@reduxjs/toolkit";

const wrongSlice = createSlice({
    initialState: {
        wrong: 0
    },
    name: "wrong",
    reducers: {
        wrongfunc : (state, {payload}) =>{
            state={wrong:state.wrong + payload}

            return state
        } 
    }
})

export const wrongreducer = wrongSlice.reducer
export const {wrongfunc} = wrongSlice.actions