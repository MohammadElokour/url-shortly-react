import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const closeMobileMenu = React.useCallback(
    () => setIsMobileMenuOpen(false),
    [],
  );

  return (
    <header className="flex items-center justify-between px-5 py-5 md:px-10">
      <img className="mr-7 h-8 w-28" src="images/logo.svg" alt="shortly-logo" />
      <Button
        color="gray"
        buttonType="link"
        size="md"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="inline-flex sm:!hidden"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <MobileMenu isOpen={isMobileMenuOpen} close={closeMobileMenu} />
      <div className="hidden flex-grow items-center space-x-4 sm:!inline-flex md:space-x-8">
        <a href="#features" className="header-link">
          Features
        </a>
        <a href="#pricing" className="header-link">
          Pricing
        </a>
        <a href="#resources" className="header-link">
          Resources
        </a>
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
          className="whitespace-nowrap bg-cyan capitalize"
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
}

export default Header;
