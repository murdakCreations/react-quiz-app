// JavaScript
// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-6TyX21Z2hL1EdhFioRqn6MohtUwQHkk",
  authDomain: "react-quiz-app-7536f.firebaseapp.com",
  projectId: "react-quiz-app-7536f",
  storageBucket: "react-quiz-app-7536f.appspot.com",
  messagingSenderId: "492357712990",
  appId: "1:492357712990:web:8f7c938af7b36ea2d3c8cf",
  measurementId: "G-8K7PNM7DDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
