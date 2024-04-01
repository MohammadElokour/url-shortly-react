import React from "react";
import Hero from "./Hero";
import Cta from "./Cta";
import Statistics from "./Statistics";

const Main = () => {
  return (
    <main className="bg-[#F0F1F6]">
      <Hero />
      <Statistics />
      <Cta />
    </main>
  );
};

export default Main;
