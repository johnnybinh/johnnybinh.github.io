import React from "react";
import Welcome from "./Home/Welcome";

const home = () => {
  return (
    <section className="h-[100vh] bg-gray-100 p-20 " id="home">
      <Welcome className="p-10" />
    </section>
  );
};

export default home;
