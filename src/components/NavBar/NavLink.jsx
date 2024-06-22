import React from "react";
import { Button } from "../ui/button";

const NavLink = ({ sectionId, name }) => {
  const scrollTo = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Button
        onClick={scrollTo}
        className="text-2xl font-light"
        variant={"link"}
      >
        {name}
      </Button>
    </div>
  );
};

export default NavLink;
