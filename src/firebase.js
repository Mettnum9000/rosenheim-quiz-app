// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // <--- FEHLTE!
import { getAnalytics } from "firebase/analytics"; // <-- nur wenn du es nutzt
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6WdqSe3quLpw0nRmQXSCKdRpUlecWcLs",
  authDomain: "rosenheim-quiz.firebaseapp.com",
  projectId: "rosenheim-quiz",
  storageBucket: "rosenheim-quiz.firebasestorage.app",
  messagingSenderId: "986220034443",
  appId: "1:986220034443:web:39c0153a96313d8ad6d78e",
  measurementId: "G-TXBWYWQ0FH"
};


// Firebase initialisieren
const app = initializeApp(firebaseConfig);

// Firestore-Datenbank exportieren
export const db = getFirestore(app);