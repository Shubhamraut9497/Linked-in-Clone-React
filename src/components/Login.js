// import { registerVersion } from "firebase/app";
import React, { useState } from "react";
import "./Login.css";

import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {login} from "../features/userSlice";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name && !email && !password ) {
      toast.error("Please Enter a full name.");
    }
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, {
          displayName: name,
          photoURL: profileUrl,
        }).then(() => {
          dispatch(
            login({
              email: user.email,
              uid:user.id,
              displayName: name,
              photoUrl: profileUrl,
            })
          );
        })
      })
    
  };



  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password).then((userAuth)=>{
      const use=userAuth.user;
      dispatch(login({
        email: use.email,
        uid:use.uid,
        displayName: use.displayName,
        photoUrl:use.photoURL
      }))
        
    })

  };
  return (
    <div className="login">
      <img
        src="https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-25.png"
        alt=""
      />
      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={profileUrl}
          onChange={(e) => {
            setProfileUrl(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Toaster position="bottom-center" reverseOrder={false} />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a Member?{" "}
        <span className="login-register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;