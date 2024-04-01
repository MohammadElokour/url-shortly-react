import { Button } from "@material-tailwind/react";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-between bg-white px-5 py-10 md:flex-row md:px-10">
      <div className="pr-0 md:pr-7 md:text-left">
        <h1 className="font-semibold leading-3 text-gray-800 sm:text-center sm:text-[2.8rem] md:text-left md:text-6xl">
          More than just shorter links
        </h1>
        <p className="mt-5 text-center text-xl !leading-8 text-gray-500 md:!text-left">
          Build your brand's recognition and get detailed{" "}
          <br className="hidden lg:!block" /> insights on how your links are
          performing.
        </p>
        <Button
          rounded={true}
          ripple="light"
          size="lg"
          className="mx-auto mt-8 h-14 w-48 bg-cyan capitalize md:!mx-0 md:mt-5"
        >
          <span className="text-lg">Get Started</span>
        </Button>
      </div>
      <img
        src="images/illustration-working.svg"
        alt="illustration-working"
        className="-mr-36 mb-12 max-w-md sm:-mr-72 sm:max-w-lg md:mb-0 md:max-w-xl lg:-mr-28"
      />
    </section>
  );
};

export default Hero;
