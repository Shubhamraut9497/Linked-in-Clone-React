// import firebase from 'firebase/auth';
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth  } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCK_ItTJgQL0dtgaA0Eli1ew99bAT7FCCA",
    authDomain: "linked-in-clone-eaa5b.firebaseapp.com",
    databaseURL: "https://linked-in-clone-eaa5b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "linked-in-clone-eaa5b",
    storageBucket: "linked-in-clone-eaa5b.appspot.com",
    messagingSenderId: "386655495964",
    appId: "1:386655495964:web:9bf94b0b5034b8ed3a3cd9"
  };
//   const firebaseApp =initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const db = getFirestore(app)


  // Use these for db & auth
//   const Db = firebaseApp.firestore();
//   const auth = auth();
  
export {db,auth,app};