// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApcwFnUKZXFu1dgg20qwGHQm3bRLbaLRM",
  authDomain: "annaba-91b92.firebaseapp.com",
  projectId: "annaba-91b92",
  storageBucket: "annaba-91b92.appspot.com",
  messagingSenderId: "1095123886569",
  appId: "1:1095123886569:web:d162f7c745840268f0ab78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;