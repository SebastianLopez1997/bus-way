// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARjEYg4lhfuL0y2reZRZFuQ06bYcHCvt0",
  authDomain: "busway-aa297.firebaseapp.com",
  projectId: "busway-aa297",
  storageBucket: "busway-aa297.appspot.com",
  messagingSenderId: "601842890680",
  appId: "1:601842890680:web:2e290e6d0c72fd2b2ac14d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)