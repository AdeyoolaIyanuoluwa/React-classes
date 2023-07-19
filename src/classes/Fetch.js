import axios from 'axios'
import React from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'

const Fetch= ()=>{
    const [data, setdata] = useState([])
    const getData=()=>{
        const url = "https://jsonplaceholder.typicode.com/users";
        // const url = "https://api.github.com/users";
        axios.get(url).then((res)=>{
            setdata(res.data)
            console.log(res.data)
    }).catch((err)=>{
        console.log(err)
    })
    }
    //     const url = `http://api.openweathermap.org/data/2.5/weather?q=lagos&appid=482ca93381d734321d0467523d591fb6`;
    //     axios.get(url).then((res)=>{
    //         setdata(res.data)
    //         console.log(res)
    //         // console.log(city)
    // }).catch((err)=>{
    //     console.log(err)
    // }
    // }
    // useEffect(() => {
    //   getData()
    // }, [])
    
    // const [data, setdata] = useState([])
    // const getData=()=>{
    //     const url = "https://jsonplaceholder.typicode.com/users";
    //     axios.get(url).then((res)=>(
    //         console.log(res)
    //     ))
    // }
  return (
    <div>
        {
            // data.length==0?<h1>loading.....</h1>:
            // data.map((user,index)=>(
            //     <div key={index}>
            //         {/* <div>{user.name}</div>
            //         <div>{user.id}</div>
            //         <div>{user.phone}</div> */}
            //         <img src={user.avatar_url}/>
            //         <div>{user.login}</div>
            //     </div>
            // ))
        }
        <input/>
        <button className='btn btn-danger m-5' onClick={getData}>Get data</button>
        {data.map((product,i)=>(
            <h6 key={i}>{product.name}</h6>
        ))}
    </div>
  )
}

export default Fetch