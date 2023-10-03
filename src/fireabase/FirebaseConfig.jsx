// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8mX6-yYxpMRWbde4J11KmCYjLo2utYzg",
  authDomain:  "myapp-e1ec6.firebaseapp.com",
  projectId:  "myapp-e1ec6",
  storageBucket: "myapp-e1ec6.appspot.com",
  messagingSenderId: "603874393790",
  appId: "1:603874393790:web:f8d100d49c3b63870128ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}