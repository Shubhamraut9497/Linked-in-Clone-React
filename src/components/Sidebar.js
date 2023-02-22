import React from 'react'
import './Sidebar.css';
import {Avatar } from '@mui/material'
import {  useSelector } from "react-redux";
import {selectUser} from '../features/userSlice'



function Sidebar() {
  const user=useSelector(selectUser);


  const recentItem=(items)=>(
    <div className='sidebar__recentItem'>
      <span className="sidebar__hash">#</span>
      <p>{items}</p>
    </div>
  );
  return (
    <div className="sidebar">
        <div className='sidebar__top'>
            <img src="https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg" alt=""/>
            <Avatar src={user.photoUrl}className="sidebar__avatar">{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
             <p>Who's viewed your profile</p>
             <p className="sidebar__statNumber">230</p>
            </div>
            <div className="sidebar__stat">
            <p>Impression on your post</p>
             <p className="sidebar__statNumber">432</p>
            </div>
        </div>
        <div className='sidebar__bottom'>
          <p>Recent</p>
          {recentItem('React-js')}
          {recentItem('Node-js')}
          {recentItem('Software Engineer')}
          {recentItem('Developer')}
          {recentItem('WFH IT jobs')}
        </div>
    </div>
  )
}

export default Sidebar