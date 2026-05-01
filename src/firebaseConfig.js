// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyAeXCoVht4fJSkfX5nip5YjILcBQptOB0U",
  authDomain: "agri-8c706.firebaseapp.com",
  projectId: "agri-8c706",
  storageBucket: "agri-8c706.appspot.com",
  messagingSenderId: "1012418699248",
  appId: "1:1012418699248:web:1fcc32394a71b5291c0735",
  measurementId: "G-DK9WT349BJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
export const db = getFirestore(app);
