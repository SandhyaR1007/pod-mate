import React from "react";
import "./styles/Home.css";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Container />
    </div>
  );
};

export default Home;
