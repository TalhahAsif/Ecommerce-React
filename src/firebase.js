import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU1gK3KIBxR_3yJpg4oDWOnSR59aXkELo",
  authDomain: "ecommerce-with-react-js.firebaseapp.com",
  projectId: "ecommerce-with-react-js",
  storageBucket: "ecommerce-with-react-js.appspot.com",
  messagingSenderId: "851766389640",
  appId: "1:851766389640:web:e1309965c7ff5e50b4283d",
  measurementId: "G-QPH6VN6F0S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, createUserWithEmailAndPassword };
