import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Weather=()=> {
    const [location, setlocation] = useState([])
    useEffect(() => {
// const url = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=482ca93381d734321d0467523d591fb6"
const url = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=482ca93381d734321d0467523d591fb6"
      axios.get(url).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })

    }, [])
    


  return (
    <div>

    </div>
  )
}


export default Weather