// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrQs10JA1dE1Rf9pZjUGFI6PkCREs42zQ",
  authDomain: "dagens-dubbel.firebaseapp.com",
  projectId: "dagens-dubbel",
  storageBucket: "dagens-dubbel.firebasestorage.app",
  messagingSenderId: "982717111499",
  appId: "1:982717111499:web:250a78091cf957177dcf4e",
  measurementId: "G-1NZQ4SJ7F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);