import React,{forwardRef,useState} from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOptions from './InputOptions'
import {BiLike,BiRepost} from 'react-icons/bi';
import {FaRegComment} from 'react-icons/fa';
import {IoIosSend} from 'react-icons/io';




const Post=forwardRef(({ name, description, message, photoUrl },ref) =>{
  const [like,setLike]=useState(0);
  const increment=()=>{
    setLike(like+1);
  }
  return (
    <div className="post" ref={ref}>
      <div className="post_header">
        <Avatar></Avatar>
        <div className="post_info">
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
        {/* <img src={photoUrl} alt="" width={600} height={300}/> */}
      </div>
      <div className="post_buttons">
        <InputOptions color="gray" title={"Like"} Icon={BiLike} like={like} onClick={increment}/>
        <InputOptions color="gray" title={"Comment"} Icon={FaRegComment} />
        <InputOptions color="gray" title={"Repost"} Icon={BiRepost} />
        <InputOptions color="gray" title={"Send"} Icon={IoIosSend} />
      </div>
    </div>
  );
})

export default Post;