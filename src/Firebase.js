// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from  'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBhi12hHDxmaB9ly2RV6WsEu4IJ37EuyRU",
  authDomain: "afroj-portfolio.firebaseapp.com",
  projectId: "afroj-portfolio",
  storageBucket: "afroj-portfolio.appspot.com",
  messagingSenderId: "397800027395",
  appId: "1:397800027395:web:d838b4a2d23a3661fd6536"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);

export const db =getFirestore();