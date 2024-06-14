// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore , collection} from 'firebase/firestore';
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQr7ZXsa_KVNvZ38xrg2IBr6QZaEW8P38",
  authDomain: "filmyverse-c504e.firebaseapp.com",
  projectId: "filmyverse-c504e",
  storageBucket: "filmyverse-c504e.appspot.com",
  messagingSenderId: "67569559345",
  appId: "1:67569559345:web:38d4441a5e6d7a6db8f210"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
export const movies = collection(db,"movies");

export default app;