// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBne3aLPu5zyClViQZavItnZcNeE3qED0g",
  authDomain: "contact-manager-sc.firebaseapp.com",
  projectId: "contact-manager-sc",
  storageBucket: "contact-manager-sc.appspot.com",
  messagingSenderId: "195632924473",
  appId: "1:195632924473:web:6f91065c28615d7adecae8",
  measurementId: "G-4ND083EWKD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();

export const facebookProvider = new FacebookAuthProvider();

export const githubProvider = new GithubAuthProvider();

export const auth = getAuth(app);

//reference to firebase database
const db = getFirestore(app);

export default db;
