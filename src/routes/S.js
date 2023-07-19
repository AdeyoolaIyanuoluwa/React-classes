import axios from 'axios'
import React from 'react'
import baseUrl from '../baseUrl'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const S = () => {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault()
        const data = {
            email: email.current.value,
            password: password.current.value,
        }
        axios.post(baseUrl + '/login', data).then(res=>{
            console.log(res);
            if(res.data.success){
                localStorage.setItem("token",res.data.token)
                navigate("/user/dash")
            }
        }).catch(err=>{
            console.log(err);
        })
    }
  return (
    <form onSubmit={handleLogin}>
         <input name ="email" ref={email} placeholder='Email' className='text form-control' />
        <input ref={password} placeholder='Password'className='text form-control' type="password"/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default S