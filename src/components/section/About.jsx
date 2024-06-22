import React from "react";
import Greeter from "./About/Greeter";
import Briefing from "./About/Briefing";

const About = () => {
  return (
    <center id="about" className="h-[80vh]">
      <div className="flex-col h-3/5 flex gap-4">
        <h1 className="text-5xl font-bold">About Me:</h1>
        <Greeter />
        <Briefing />
      </div>
    </center>
  );
};

export default About;
