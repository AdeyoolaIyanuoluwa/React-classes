import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
// import { useNavigate } from 'react-router-dom'
import baseUrl from '../baseUrl'

const NewPost = () => {
    // const [user, setuser] = useState()
    // const navigate = useNavigate()
    const more = useRef()
    const title = useRef()
    const picture = useRef()
    const createPost = ()=>{
        const form = new FormData()
        form.append("more", more.current.value)
        form.append("title", title.current.value)
        form.append("picture", picture.current.files[0])
        axios.post(baseUrl + "/newPost",form)
        .then(res=>{
            console.log (res)
        }).catch(err=>{
            console.log(err)
        })
    }
    const [post, setpost] = useState([])
    useEffect(() => {
        axios.get(baseUrl + "/newPost").then(res=>{
            setpost(res.data)
            // console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    
  return (
    <div>
        <div>
            <input ref={more} placeholder="firstname" name='more' className= "mt-2 w-50 p-2 rounded mb-4 form-control "/>
            <input ref={title} placeholder="lastname" name='title' className= "mt-2 w-50 p-2 rounded mb-4 form-control "/>
            <input ref={picture} placeholder="image" name='picture' className= "mt-2 w-50 p-2 rounded mb-4 form-control " type="file" />
            <input onClick={createPost} className= "mt-2 w-50 p-2 rounded mb-4 form-control " type="submit"/>
        </div>
    
        <div>
            {
                post.map((each,i) =>(
                    <div>
                        {each.imagesPath}
                        {/* <img src={`${baseUrl}/postimages/${each.imagesPath}`} alt="postimage"/> */}
                        <img src={each.imageLink} alt="postimage"/>
                    </div>
                ))
            }
        </div>
     </div>
  )
}

export default NewPost