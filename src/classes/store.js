import { configureStore } from "@reduxjs/toolkit";
import { correctReducers } from "../slices/correctSlice";
import { counterReducer } from "../slices/counterSlice";
import {  userReducer } from "../slices/userSlice";
import { wrongreducer } from "../slices/wrongSlice";

const store = configureStore({
    reducer:{
        counter: counterReducer,
        profile: userReducer,
        correct: correctReducers,
        wrong: wrongreducer
    }
})

export default store