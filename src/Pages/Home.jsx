import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";
import { Spinner } from "@nextui-org/react";
import CategoryChips from "../Component/CategoryChips";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Card />
      </div>
    </>
  );
};

export default Home;
