// // src/firebaseConfig.js

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; // Import Firebase Authentication
// import { getFirestore } from "firebase/firestore"; // Import Firebase Authentication

// const firebaseConfig = {
//   apiKey: "AIzaSyAeXCoVht4fJSkfX5nip5YjILcBQptOB0U",
//   authDomain: "agri-8c706.firebaseapp.com",
//   projectId: "agri-8c706",
//   storageBucket: "agri-8c706.appspot.com",
//   messagingSenderId: "1012418699248",
//   appId: "1:1012418699248:web:1fcc32394a71b5291c0735",
//   measurementId: "G-DK9WT349BJ",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Auth
// export const auth = getAuth(app);
// export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKSYtUtW3XVq7-yG0PbvYmDpQ_RSm4zHA",
  authDomain: "expense-tracker-c31d2.firebaseapp.com",
  projectId: "expense-tracker-c31d2",
  storageBucket: "expense-tracker-c31d2.firebasestorage.app",
  messagingSenderId: "705089439109",
  appId: "1:705089439109:web:3f70a108f681bebbe2b0ec",
  measurementId: "G-TJXH2E186E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);