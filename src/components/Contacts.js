import React from 'react'
import { useEffect } from "react";
import Button from './Button';

const Contacts = ({setbuttonTitle, buttonTitle, seteachColor,eachColor}) => {
    useEffect(() => {
        setbuttonTitle("contactBtn");
        seteachColor("btn btn-warning")
    }, [])
    
  return (
    <div>
        <h1 className="text">Contacts</h1>
                <Button buttonTitle={buttonTitle} eachColor={eachColor}/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aut voluptatem optio deleniti nobis beatae provident similique labore reiciendis quas praesentium, molestias, ad consectetur nulla rem iusto dolor modi nesciunt!
    </div>
  )
}

export default Contacts