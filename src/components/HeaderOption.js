import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";

function HeaderOption(props) {
  // const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={props.onClick}>
      {props.Icon && <props.Icon className="headerOption__icon" />}
      {props.avatar && (
        <Avatar className="headerOption__icon">{"hello"}
        </Avatar>
      )}
      <h6 className="headerOption__title">{props.title}</h6>
    </div>
  );
}

export default HeaderOption;
