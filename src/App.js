import React from "react";
import "./App.css";
import Menubar from "./components/Menubar";
import Home from "./pages/Home";
const App = () => {
  return (
    <div className="app">
      <Menubar />
      <Home />
    </div>
  );
};

export default App;
