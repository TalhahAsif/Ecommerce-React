import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";
import { Spinner } from "@nextui-org/react";
import CategoryChips from "../Component/CategoryChips";
import { auth } from "../firebase";
import { Toaster } from "sonner";
import { onAuthStateChanged } from "firebase/auth";
import { logEvent } from "firebase/analytics";

const Home = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <Toaster />
      <Navbar />
      <div>
        <Card />
      </div>
    </>
  );
};

export default Home;
