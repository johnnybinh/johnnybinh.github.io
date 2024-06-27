import React from "react";
import Welcome from "./Home/Welcome";
import codingman from "../../../src/assets/codingman.svg";
const home = () => {
  return (
    <section className="h-[100vh] py-52 " id="home">
      <div className="flex w-full  justify-around items-center">
        <Welcome />
        <img src={codingman} alt="" className="w-3/12 max-md:hidden" />
      </div>
    </section>
  );
};

export default home;
