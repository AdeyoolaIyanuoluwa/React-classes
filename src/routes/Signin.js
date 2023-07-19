import axios from 'axios'
import React  from 'react'
import { useState } from "react"
import baseUrl from '../baseUrl'

const Signin = () => {
    const [users, setUsers] = useState({ email: "", password:""})

    const handleChange = (e) => {
        const {name,value }= e.target;
        setUsers({...users, [name]:value})
        // console.log(users)
    }
    const login = async ()=>{
        axios.post(baseUrl + "/login", users).then(res=>{})
        .catch(err=>{
            console.log(err.message)
        })
      
    }
  return (
    <div>
        <input onChange={handleChange} placeholder='Email' name='email' className='text form-control' type="email" value={users.email}/>
        <input onChange={handleChange} placeholder='Password' name='password' className='text form-control' type="password" value={users.password}/>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Signin