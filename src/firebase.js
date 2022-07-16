// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRVufP1uhZ6CzNtIK5HsmwIMKjEv4r_qI",
  authDomain: "yt-demo-9e9b2.firebaseapp.com",
  projectId: "yt-demo-9e9b2",
  storageBucket: "yt-demo-9e9b2.appspot.com",
  messagingSenderId: "503700898286",
  appId: "1:503700898286:web:7bb1bd03d47e578dd50eff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();

const firestore =firebase.firestore();
export const database ={
  users:firestore.collection('users')
}