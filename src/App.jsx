import React from "react";
import { Button } from "./components/ui/button";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Exp from "./components/section/Exp";
import Project from "./components/section/Project";

const App = () => {
  return (
    <div className=" h-[100vh]">
      <NavBar />
      <div>
        {" "}
        <Home />
        <About />
        <Exp />
        <Project />
      </div>
    </div>
  );
};

export default App;
