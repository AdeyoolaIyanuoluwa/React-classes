// import React from 'react'
import Button from './Button'
import React, {useEffect} from 'react'

const Dashboard = ({setheadings, headings, setbuttonTitle, buttonTitle, seteachColor,eachColor}) => {
    useEffect(() => {
     setheadings("Dashboard")
     setbuttonTitle("DashBtn");
     seteachColor("btn btn-info")
    }, [])
    
  return (
    <div>
        <h1 className="text">{headings}</h1>
        <Button buttonTitle={buttonTitle} eachColor={eachColor}/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quaerat ipsum ratione <Button buttonTitle={buttonTitle} eachColor={eachColor}/> odit sapiente assumenda dolores hic pariatur nobis facere. Perspiciatis adipisci iure sapiente ipsa eius aliquam incidunt accusamus quidem.
    </div>
  )
}

export default Dashboard