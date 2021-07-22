import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverBody from "@material-tailwind/react/PopoverBody";

function Header() {
  const menu = useRef();

  return (
    <>
      <header className="pt-5 px-5 md:px-10 pb-5 md:pb-16 flex items-center justify-between">
        <img className="mr-7" src="images/logo.svg" alt="shortly-logo" />
        <Button
          color="gray"
          buttonType="link"
          size="md"
          rounded={true}
          iconOnly={true}
          ripple="dark"
          className="inline-flex sm:!hidden"
          ref={menu}
        >
          <Icon name="menu" size="3xl" />
        </Button>
        <Popover ref={menu} >
          <PopoverContainer className="2xsm:w-72 xsm:w-80 sm:w-96">
            <PopoverBody className="bg-violet !p-10 rounded-lg">
              <div className="border-b-[1px] border-gray-600 text-center pb-5 text-white font-bold space-y-5">
                <a className="block" href="features">Features</a>
                <a className="block" href="pricing">Pricing</a>
                <a className="block" href="resources">Resources</a>
              </div>
              <div className="flex flex-col justify-center mt-3 space-y-3">
                <Button
                  rounded={true}
                  ripple="dark"
                  className="capitalize bg-violet shadow-none"
                >
                  Login
                </Button>
                <Button
                  rounded={true}
                  ripple="light"
                  className="bg-cyan capitalize whitespace-nowrap"
                >
                  Sign Up
                </Button>
              </div>
            </PopoverBody>
          </PopoverContainer>
        </Popover>

        <div className="hidden space-x-4 md:space-x-8 sm:!inline-flex items-center flex-grow">
          <a href="features" className="header-link">Features</a>
          <a href="pricing" className="header-link">Pricing</a>
          <a href="resources" className="header-link">Resources</a>
        </div>
        <div className="hidden sm:!inline-flex">
          <Button
            color="gray"
            buttonType="link"
            rounded={true}
            ripple="dark"
            className="mx-1 capitalize"
          >
            Login
          </Button>
          <Button
            rounded={true}
            ripple="light"
            className="bg-cyan capitalize whitespace-nowrap"
          >
            Sign Up
          </Button>
        </div>
      </header>
      <section className="px-5 md:px-10 pb-10 flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="pr-0 md:pr-7 md:text-left">
          <h1 className="text-gray-800 leading-none text-[2.8rem] md:!text-6xl text-center md:!text-left font-semibold">More than just shorter links</h1>
          <p className="text-gray-500 mt-5 !leading-8 text-xl text-center md:!text-left">Build your brand's recognition and get detailed <br className="hidden lg:!block" /> insights on how your links are performing.</p>
          <Button
            rounded={true}
            ripple="light"
            size="lg"
            className="bg-cyan mt-8 md:mt-5 w-48 h-14 capitalize mx-auto md:!mx-0"
          >
            <span className="text-lg">Get Started</span >
          </Button>
        </div>
        <img src="images/illustration-working.svg" alt="illustration-working"
          className="-mr-36 sm:-mr-72 lg:-mr-28 mb-12 md:mb-0 max-w-md sm:max-w-lg md:max-w-xl" />
      </section>
    </>
  )
}

export default Header
