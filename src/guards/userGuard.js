import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import baseUrl from '../baseUrl'
import Main from '../routes/Main'

const UserGuard =  () => {
    // const isLoggedIn = true
        const [component, setComponent] = useState(<div>....Loading</div>)
        const navigate = useNavigate()
        useEffect(() => {
         axios.get(baseUrl+ "/profile").then(res=>{
            console.log(res)
            if(res.data.success){
                console.log(res.data.data);
                setComponent(<Main/>)
            }
         }).catch(err=>{
                if (!err?.response.data.success){
                    navigate("/S")
                }
         })
        }, [navigate])
        
    return component
    // if(isLoggedIn){
    //     return <Main/>
    // }else{
    //    return <Navigate to="/login"/>
    // }
 
}

export default UserGuard