import React from 'react'
import { Navigate } from 'react-router-dom'
import Main from '../routes/Main'

const UserGuard = () => {
    const isLoggedIn = true
    if(isLoggedIn){
        return <Main/>
    }else{
       return <Navigate to="/login"/>
    }
 
}

export default UserGuard