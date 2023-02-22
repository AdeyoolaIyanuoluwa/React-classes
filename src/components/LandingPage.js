import React, {useEffect, useState} from 'react'
import Button from './Button'
import Style from '../css/NavCss.css'


const LandingPage = ({setheadings, headings, setbuttonTitle, buttonTitle, seteachColor, eachColor}) => {
    const [landingcss, setlandingcss] = useState(Style.landing);
    useEffect(() => {
        setheadings("LandingPage");
        setbuttonTitle("LandingBtn");
        seteachColor("btn btn-primary")
        setlandingcss(Style.landing)
       }, [])
       
  return (
    <div>
          <h1 className="text">{headings}</h1>
          <Button buttonTitle={buttonTitle} Style={Style} eachColor={eachColor}/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, debitis rem beatae laboriosam tempore doloribus dolorum eligendi esse deserunt a hic. Animi iure nam placeat blanditiis labore modi assumenda rerum.
    </div>
  )
}

export default LandingPage