import "./App.css";
import React ,{useEffect} from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Feed from "./components/Feed";
import RightSideBar from './components/RightSideBar'
import {login,logout} from './features/userSlice'
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import {auth} from './components/firebase'



function App() {
  const user = useSelector(selectUser);
  const dispatch =useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        // user is directly logged in to the page of linked in 
           dispatch(login({
            email: userAuth.email,
            uid:userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
           }))
      }
      else{
         dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <RightSideBar />
        </div>
      )}
    </div>
  );
}

export default App;
