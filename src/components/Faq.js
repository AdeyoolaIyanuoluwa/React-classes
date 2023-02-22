import React from 'react'
import { useEffect } from 'react'
import Button from './Button'
const Faq = ({setbuttonTitle, buttonTitle, seteachColor,eachColor}) => {
    useEffect(() => {
      setbuttonTitle("Faq btn")
      seteachColor("btn btn-danger")
    }, [])
    
  return (
    <div>
        <h1 className="text">Faq</h1>
        <Button className="btn btn-danger" buttonTitle={buttonTitle} eachColor={eachColor}/>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet pariatur labore perspiciatis repudiandae voluptatum, dolore accusamus nam dolor quos est magni ab consectetur tempore dicta velit porro consequuntur impedit necessitatibus.
    </div>
  )
}

export default Faq