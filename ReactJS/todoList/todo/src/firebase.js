// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-FX6UviZTYURB9Azj4321mcK1NA3wTdA",
  authDomain: "todo-list-f1f8c.firebaseapp.com",
  projectId: "todo-list-f1f8c",
  storageBucket: "todo-list-f1f8c.appspot.com",
  messagingSenderId: "108962793198",
  appId: "1:108962793198:web:ae5915d6e5a5348f8815ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);