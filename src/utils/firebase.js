// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI-psjXxr5BMdf1qAZhtExgljjtEaH8uk",
  authDomain: "react-expense-manager-3c688.firebaseapp.com",
  projectId: "react-expense-manager-3c688",
  storageBucket: "react-expense-manager-3c688.appspot.com",
  messagingSenderId: "198014577148",
  appId: "1:198014577148:web:9cfc939a6b35ee047aaa79"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// const auth = initializeApp(firebaseConfig);
const db = getFirestore(app);



export {
  db
}