import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Image from "react-bootstrap/Image";
import HeaderOption from "./HeaderOption";
import { FaHome } from "react-icons/fa";
import { BsPeopleFill, BsFillBellFill } from "react-icons/bs";
import { GiSuitcase } from "react-icons/gi";
import { TbMessageCircle } from "react-icons/tb";
import { useDispatch } from "react-redux";
import {logout} from '../features/userSlice';
import {auth} from './firebase'






const Header = () => {
  const dispatch=useDispatch();
  const logOutOfApp=()=>{
    dispatch(logout())
      auth.signOut()
  }
  return (
    <>
      <div className="header">
        <div className="header__left d-flex align-items-center justify-content-flex-start">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
            width={30}
            height={30}
          />
          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search"/>
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={FaHome} title="Home" />
          <HeaderOption Icon={BsPeopleFill} title="My Network" />
          <HeaderOption Icon={GiSuitcase} title="Jobs" />
          <HeaderOption Icon={TbMessageCircle} title="Messaging" />
          <HeaderOption Icon={BsFillBellFill} title="Notifications" />
          <HeaderOption
          avatar={true}
            title="Me"
            onClick={logOutOfApp}
          />
        </div>
      </div>
    </>
  );
};

export default Header;