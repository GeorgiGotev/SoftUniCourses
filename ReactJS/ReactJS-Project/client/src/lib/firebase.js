// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs4VmwbeMCeYhjdZbDt0TzXjQ4gItg_Yw",
  authDomain: "food-recipes-d564f.firebaseapp.com",
  projectId: "food-recipes-d564f",
  storageBucket: "food-recipes-d564f.appspot.com",
  messagingSenderId: "951805259299",
  appId: "1:951805259299:web:fc2499ba589e2ab0338b96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const authenticated = getAuth(app)

