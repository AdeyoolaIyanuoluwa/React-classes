import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setProfile } from '../slices/userSlice'

const Pro = () => {
    const {profile} = useSelector((state)=>state)
    const [user, setUser] = useState(profile)
        // console.log(state)
    const handleChange = (e)=>{
          const value = e.target.value
          const name = e.target.name
          setUser({...user, [name]: value})
          // dispatch(setProfile(user))
          dispatch(setProfile({...user, [name]: value}))
    }
        const dispatch = useDispatch()
          const editProfile = () =>{
              dispatch(setProfile(user))
              console.log(user)
        }
  return (
    <div>
        {/* <h5>NAME: {state.lastname} {state.firstname}</h5>
        <h5>COURSE: {state.course}</h5>
        <h5>SCHOOL: {state.school}</h5> */}
        <input onChange={handleChange} name='firstname' value={user.firstname} />
        <input onChange={handleChange} name='lastname' value={user.lastname} />
        <input onChange={handleChange} name='course' value={user.course} />
        <button className='btn btn-success' onClick={editProfile}>Edit Profile</button>
    </div>
  )
}

export default Pro