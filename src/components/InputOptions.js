import React from "react";
import "./InputOptions.css";
function InputOptions(props) {
  return (
    <div className="InputOptions">
      {props.title === "Like" ? (
        <span onClick={props.onClick}>
          <props.Icon />
          {props.like>0?props.like+" "+props.title:props.title}
        </span>
      ) : (
        <>
          <props.Icon style={{ color: props.color }} />
          <h4>{props.title}</h4>
          <p>{props.like}</p>
        </>
      )}
    </div>
  );
}

export default InputOptions;
