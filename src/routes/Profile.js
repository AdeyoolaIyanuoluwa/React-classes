import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const {username}= useParams()
  return (
    <div>Users profile Here
        <h1>{username}</h1>
    </div>
  )
}

export default Profile