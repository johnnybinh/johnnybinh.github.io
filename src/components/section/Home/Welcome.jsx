import { Button } from "@/components/ui/button";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { SiFacebook } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="flex flex-col gap-2 items-center ">
      <h1 className="text-4xl">Hi I'm</h1>
      <h1 className="text-5xl font-bold max-sm:text-red-500">
        Nguyen The Binh
      </h1>
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
      <div className="gap-2 flex">
        {" "}
        <Button variant={"outline"} className="size-16">
          <SiFacebook className="size-12" />
        </Button>
        <Button variant={"outline"} className="size-16">
          <SiGithub className="size-12" />
        </Button>
        <Button variant={"outline"} className="size-16">
          <FaLinkedin className="size-12" />
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
