// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJYeJOST8IbReGJIHF5z1JdAXzCvcvxTk",
  authDomain: "qr-track-ac8ec.firebaseapp.com",
  projectId: "qr-track-ac8ec",
  storageBucket: "qr-track-ac8ec.appspot.com",
  messagingSenderId: "647098870907",
  appId: "1:647098870907:web:58a5de6ae6114c768346de",
  measurementId: "G-8HP1PDQB09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);