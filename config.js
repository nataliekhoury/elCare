//firebase config key stepup
//from the web config firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';
// import {GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {

  apiKey: "AIzaSyDwiaBUgT4ZoEfweEQAzJmvN6tWR_8Wui0",
  authDomain: "elcare-bb10b.firebaseapp.com",
  projectId: "elcare-bb10b",
  storageBucket: "elcare-bb10b.appspot.com",
  messagingSenderId: "1035672628771",
  appId: "1:1035672628771:web:1396df081036e271170b96",
  measurementId: "G-TFKKFDK103",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };

// export const provider = new GoogleAuthProvider(app);