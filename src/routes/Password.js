import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import baseUrl from '../baseUrl';

const Password = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState({firstname:"", lastname:"", email: "", password:""})
    // const [array, setArray] = useState([])
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUsers({...users, [name]:value})
        console.log(users)
    }
    const handleSubmit = () => {
        // setArray([...array, users])
        //     console.log(array)
        axios.post(baseUrl + "/register", users).then( res =>{
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        navigate("/signin")
    }
  return (
    <div>
        <input onChange={handleChange} placeholder='Firstname' name='firstname' className='text form-control' type="text" value={users.firstname}/>
        <input onChange={handleChange} placeholder='Lastname' name='lastname' className='text form-control' type="text" value={users.lastname}/>
        <input onChange={handleChange} placeholder='Email' name='email' className='text form-control' type="email" value={users.email}/>
        <input onChange={handleChange} placeholder='Password' name='password' className='text form-control' type="password" value={users.password}/>
        <button className='btn btn-success mt-3' onClick={handleSubmit}>Submit</button>
        
    </div>
  )
}

export default Password