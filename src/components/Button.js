import React from 'react'
import "../css/NavCss.css"

const Button = (props) => {
  return (
    <div> 
        <button style={props.Style} className={props.eachColor}>{props.buttonTitle}</button>
    </div>
  )
}

export default Button