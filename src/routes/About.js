import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
  const state = useSelector((state)=>state.profile)
  console.log(state)
  return (
    <div>
        <h1>My Details</h1>
        <h3>NAME: {state.lastname} {state.firstname}</h3>
        <h3>COURSE: {state.course}</h3>
        <h3>SCHOOL: {state.school}</h3>
    </div>
  )
}

export default About