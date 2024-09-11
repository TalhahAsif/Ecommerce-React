import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMJCJlWGSXavl3lTiU6lXtvuwoc4ffXNk",
  authDomain: "e-commerce-with-react-smit.firebaseapp.com",
  projectId: "e-commerce-with-react-smit",
  storageBucket: "e-commerce-with-react-smit.appspot.com",
  messagingSenderId: "495219642673",
  appId: "1:495219642673:web:5d256beaadc16c0a042010",
  measurementId: "G-VQSPB3B0LC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
    app,
    auth,
    createUserWithEmailAndPassword,
}
