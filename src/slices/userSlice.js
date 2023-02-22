import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    initialState: {
        firstname: "Iyanuoluwa",
        lastname: "Adeyoola",
        course: "Software Engineering",
        school: "SQI"
    },
    name: "profile",
    reducers:{  //reducers are actions or functions
        setProfile: (state, {payload})=>{
            state = {...state, ...payload}
            return state
        }
    }
})

export const userReducer = userSlice.reducer
export const {setProfile} = userSlice.actions