import React from "react";
import "./styles/Home.css";

import Container from "../components/container/Container";

import Heading from "../components/navbar/Heading";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Heading />
      <Container />
    </div>
  );
};

export default Home;
