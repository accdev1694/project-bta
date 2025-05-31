// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJEx_OimSEJ77gqXhEpAerwmme3iGtV9s",
  authDomain: "project-bta-1882a.firebaseapp.com",
  projectId: "project-bta-1882a",
  storageBucket: "project-bta-1882a.firebasestorage.app",
  messagingSenderId: "544322326996",
  appId: "1:544322326996:web:98c140c3431945d1b50641",
  measurementId: "G-SMME6DWMSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);