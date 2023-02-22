import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const handleLogin =()=>{
    //check if details are valid
    navigate("user/dash")
  }
  return (
    <div>
      <button onClick={handleLogin}>Login here</button>
    </div>
  )
}

export default Login