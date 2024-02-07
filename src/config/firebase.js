import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyAN0T9vB62jwz_-brgp7yXqq9Y6qOCCRFw",
  // authDomain: "codemingle.firebaseapp.com",
  // projectId: "codemingle",
  // storageBucket: "codemingle.appspot.com",
  // messagingSenderId: "743818202109",
  // appId: "1:743818202109:web:75888c3b0ed87927e9a794"


  apiKey: "AIzaSyDZIdMlzJvfkcUGydEjYmZ_2B-6_ukJGcg",
  authDomain: "blog2-31fc8.firebaseapp.com",
  projectId: "blog2-31fc8",
  storageBucket: "blog2-31fc8.appspot.com",
  messagingSenderId: "556994651400",
  appId: "1:556994651400:web:07f455c39ad0012c90b8bd",
  measurementId: "G-GW8XHWSY42"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const usersInfo=getFirestore();

// export const cchhaatt=getFirestore();
// export const roomData=getFirestore();