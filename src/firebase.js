// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHHEEP9DASouIUcVaFqCuWj0DXO9Yrc8Y",
  authDomain: "demoproject-f5ddc.firebaseapp.com",
  projectId: "demoproject-f5ddc",
  storageBucket: "demoproject-f5ddc.appspot.com",
  messagingSenderId: "769118440754",
  appId: "1:769118440754:web:be19130b47ba4e76105b2b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {firebase,auth}