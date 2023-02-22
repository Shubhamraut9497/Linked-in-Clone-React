import React from 'react'
import './InputOptions.css';
function InputOptions(props) {
  return (
    <div className="InputOptions">
    <props.Icon style={{color:props.color}}/>
    <h4>{props.title}</h4>
    </div>
  )
}

export default InputOptions