import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
// import { useStorage } from './useStorage';


const CustomHook=()=> {
    const [species, setspecies] = useState([])
    const [isLoading, setisLoading] = useState(false)
    useEffect(()=>{
        // const url = "https://cat-fact.herokuapp.com/facts"
        const url = "https://cat-fact.herokuapp.com/facts"
        setisLoading(true)
        axios.get(url).then(res=>{
            console.log(res)
            setspecies(res.data)
            setisLoading(false)
        }).catch(err=>{
            console.log(err);
            setisLoading(false)
        })
    }, [])

    // const [data, setData] = useState([])
    // const{getIt} = useStorage()
    // useEffect(()=>{
    //     if(localStorage.data){
    //         setData(getIt("data"))
    //     }
    // }, [])
  return (
    <div>
        {isLoading ? 'loading.....':
    species.map((each,i)=><div key={i}>{each.text}</div>)}

    </div>
  )
}

export default CustomHook