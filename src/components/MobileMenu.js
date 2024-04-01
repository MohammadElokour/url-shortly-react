import { Button, Icon } from "@material-tailwind/react";
import React from "react";
import { outline } from "tailwindcss/defaultTheme";

const MobileMenu = ({ isOpen, close }) => {
  return (
    <div
      className={`p-b absolute left-0 right-0 top-0 flex w-full transition-transform ${isOpen ? "translate-y-0" : "-translate-y-96"} flex-col rounded-b-lg bg-violet px-5 pb-10 pt-5`}
    >
      <div className="flex items-center justify-between pb-5">
        <img
          className="h-8 w-28 invert"
          src="images/logo.svg"
          alt="shortly-logo"
        />
        <Button
          color="gray"
          buttonType="link"
          size="md"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          onClick={close}
          className="inline-flex sm:!hidden"
        >
          <Icon name="close" size="3xl" />
        </Button>
      </div>
      <div className="flex flex-col items-center space-y-5 border-b-[1px] border-gray-600 pb-5 text-center font-bold text-white">
        <a className="block w-40 hover:text-cyan" href="#features">
          Features
        </a>
        <a className="block w-40 hover:text-cyan" href="#pricing">
          Pricing
        </a>
        <a className="block w-40 hover:text-cyan" href="#resources">
          Resources
        </a>
      </div>
      <div className="mt-3 flex w-full flex-col items-center justify-center space-y-3">
        <Button
          rounded={true}
          ripple="dark"
          className="!min-w-[160px] border-[1px] border-white !bg-violet capitalize !shadow-none hover:!bg-white hover:text-violet hover:!shadow-none"
        >
          Login
        </Button>
        <Button
          rounded={true}
          ripple="light"
          className="!min-w-[160px] whitespace-nowrap bg-cyan capitalize hover:!shadow-none"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
