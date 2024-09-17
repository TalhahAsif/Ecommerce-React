import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import NavbarCmp from "../Component/Navbar";
import Card from "../Component/Card";
import { Spinner } from "@nextui-org/react";
import CategoryChips from "../Component/CategoryChips";
import { auth } from "../firebase";
import { Toaster } from "sonner";
import { onAuthStateChanged } from "firebase/auth";
import { logEvent } from "firebase/analytics";
import { userContext } from "../Contexts/UserContext";

const Home = () => {
  const { user, setUser } = useContext(userContext);

  // console.log(user?.email);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
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
      <NavbarCmp />
      <div>
        <Card />
      </div>
    </>
  );
};

export default Home;
