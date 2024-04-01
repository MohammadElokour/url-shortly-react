import { Button } from "@material-tailwind/react";
import React from "react";

const Cta = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-violet bg-footer-texture-xl p-12">
      <h1 className="mb-4 text-2xl font-bold text-white">
        Boost your links today
      </h1>
      <Button
        rounded={true}
        size="xl"
        ripple="light"
        className="ml-3 bg-cyan capitalize"
      >
        Get Started
      </Button>
    </div>
  );
};

export default Cta;
