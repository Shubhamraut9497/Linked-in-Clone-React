import React, { useState, useEffect } from "react";
import "./Feed.css";
import { MdCreate } from "react-icons/md";
import InputOptions from "./InputOptions";
import Post from "./Post";
import { BsImage, BsCalendar2Event } from "react-icons/bs";
import { FcVideoCall } from "react-icons/fc";
import { RiArticleLine } from "react-icons/ri";
import { db } from "./firebase.js";
import { collection, onSnapshot,addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from 'react-flip-move'



function Feed() {
  const user=useSelector(selectUser);
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);

 
  useEffect(() => {
    var newPost = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPost(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id })));     //...doc.data()
    });
    return newPost;
  }, []); 


  const postsCollection = collection(db, 'posts');
 
  const sendPost = (e) => {
    e.preventDefault();
    // db.Collection("posts").add({
    //   name: "Shubham Raut",
    //   description: "this is for testing purpose",
    //   message: input,
    //   photoUrl: "",
    // });
    // setInput("");
    const posts={
      id:user.uid,
      name:user.displayName,
      description:user.email,
      message:input,
      photoUrl:user.photoUrl || "",
    }
    addDoc(postsCollection,posts)
    setInput("");
  };



  return (
    <div className="feed">
      <div className="feed_inputContainer container">
        <div className="feed_input">
          <MdCreate />
          <form>
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
            <button onClick={sendPost} type="submit">
              Post
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOptions Icon={BsImage} title="Photo" color="#70B5F9" />
          <InputOptions Icon={FcVideoCall} title="Video" color="" />
          <InputOptions Icon={BsCalendar2Event} title="Event" color="#964B00" />
          <InputOptions
            Icon={RiArticleLine}
            title="Write article"
            color="#A52A2A"
          />
        </div>
      </div>
      {/* posts are now goint to add here */}
      <FlipMove>
      {post.map((data) => {
        return (
        <Post
          key={data.uid}
          name={data.name}
          description={data.description}
          message={data.message}
          photoUrl={data.photoUrl}
        />
      )
      })}
      </FlipMove>
    </div>
  );
}

export default Feed;
