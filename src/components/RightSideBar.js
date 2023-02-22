import React from "react";
import "./RightSidebar.css";
import {BsFillInfoSquareFill} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

function RightSideBar() {
    const news=(heading,article)=>(
        <div className="widgets_article">
            <div className="widget_articleLeft">
              <RxDotFilled />
            </div>
            <div className="widgets_articleRight">
              <h4>{heading}</h4>
              <p>{article}</p>
            </div>
        </div>
    )
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h3>LinkedIn News</h3>
        <BsFillInfoSquareFill style={{marginTop:"-10px"}}/>
      </div>
      {news("TCS won't lay Off but hire","20h ago 1474 readers")}
      {news("Top life goals for Indians","21h ago 1200 readers")}
      {news("Top cities lead in hiring","22h ago 1474 readers")}
      {news("Stem talent in demand","1 day ago 1474 readers")}
      {news("India's 5G market sets to soar","1 day ago 1474 readers")}
    </div>
  );
}

export default RightSideBar;
