import React from "react";
import { Button } from "../ui/button";
import NavLink from "./NavLink";

const NavBar = () => {
  const section = [
    { sectionId: "home", name: "Home" },
    { sectionId: "about", name: "About" },
    { sectionId: "exp", name: "Experience" },
    { sectionId: "proj", name: "Project" },
  ];

  return (
    <div className="flex justify-between p-10">
      <h1 className="text-2xl">Nguyen The Binh</h1>
      <div className="flex gap-12">
        <div className="flex">
          {section.map((sec) => (
            <NavLink
              key={sec.sectionId}
              name={sec.name}
              sectionId={sec.sectionId}
            ></NavLink>
          ))}
        </div>
        <Button className="text-lg" variant={"outline"}>
          Contact
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
