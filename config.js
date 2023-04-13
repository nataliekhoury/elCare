// import * as firebase from 'firebase';
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDwiaBUgT4ZoEfweEQAzJmvN6tWR_8Wui0",
//   authDomain: "elcare-bb10b.firebaseapp.com",
//   projectId: "elcare-bb10b",
//   storageBucket: "elcare-bb10b.appspot.com",
//   messagingSenderId: "1035672628771",
//   appId: "1:1035672628771:web:1396df081036e271170b96",
//   measurementId: "G-TFKKFDK103"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);


import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDwiaBUgT4ZoEfweEQAzJmvN6tWR_8Wui0",
  authDomain: "elcare-bb10b.firebaseapp.com",
  projectId: "elcare-bb10b",
  storageBucket: "elcare-bb10b.appspot.com",
  messagingSenderId: "1035672628771",
  appId: "1:1035672628771:web:1396df081036e271170b96",
  measurementId: "G-TFKKFDK103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);


