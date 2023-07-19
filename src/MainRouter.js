import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import About from './routes/About'
import App from './routes/App'
import Login from './routes/login'
import Nav from './routes/Nav'
import Profile from './routes/Profile'
import Dash from './routes/Dash'
import Main from './routes/Main'
import NewPost from './routes/NewPost'
import UserGuard from './guards/userGuard'
import Assign from './classes/assign'
import examination from './classes/examination'
import Pro from './routes/pro'
import Password from './routes/Password'
import Signin from './routes/Signin'
import FormikYup from './formikyup/FormikYup'
import S from './routes/S'
import ClassComponent from './routes/ClassComponent'
import axios from 'axios'
import ForSocket from './routes/ForSocket'

axios.interceptors.request.use((value)=>{
  value.headers = {
    "Authorization":localStorage.token
  };
  return value
})
 const MainRouter = () => {
  return (
      <Router>
        <Nav/>
          <Routes>
                <Route path='/class' element={<ClassComponent/>}/>
                <Route path='/que/:id' element={<Assign examination={examination}/>}/>
                <Route path='/pass' element={<Password/>}/>
                <Route path='/form' element={<FormikYup/>}/>
                <Route path='/socket' element={<ForSocket/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/s' element={<S/>}/>
                <Route path='/pro' element={<Pro/>}/>
                {/* <Route path='/dash' element={<Dash/>}/> */}
                <Route path='/newpost' element={<NewPost/>}/>
                <Route path='/main' element={<Main/>}/> 
                <Route path='/' element={<App/>}/> 
                <Route path='/quiz' element={<quizApp/>}/> 
                <Route path='/login' element={<Login/>}/> 
                <Route path='/newPost' element={<NewPost/>}/> 
                <Route path='/about' element={<About/>}/> 
                <Route path='/user' element={<UserGuard />} 
                  children={[
                  <Route path='dash' element={<Dash/>}/>,
                  <Route path='profile/:username' element={<Profile/>}/> 
                ]}/>
          <Route path='*' element={<div>Looks like you are lost <Link to="/user/dash">Go to dashboard</Link></div>}/>
          </Routes>
        
      </Router>
        
  )
}
export default MainRouter