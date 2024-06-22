import React from "react";
import { TypeAnimation } from "react-type-animation";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">Hi I'm</h1>
      <h1 className="text-5xl">Nguyen The Binh</h1>
      <div className="flex">
        <h1 className="text-4xl pr-2">A</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Web",
            2000, // wait 2s before replacing "Mice" with "Hamsters"
            "Front-end",
            2000,
            "Back-end",
            2000,
          ]}
          wrapper="div"
          speed={50}
          className="text-4xl font-semibold"
          repeat={Infinity}
        />
        <h1 className="text-4xl">Developer</h1>
      </div>
    </div>
  );
};

export default Welcome;
