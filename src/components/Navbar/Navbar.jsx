import React, { useState } from "react";
import { Navbar as FwNavbar, Button, DarkThemeToggle } from "flowbite-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("0");
  return (
    <FwNavbar fluid={true}>
      <FwNavbar.Brand href="/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Meme Studio Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Meme Studio
        </span>
      </FwNavbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle style={{ marginRight: "1rem" }} />
        <Button>Get Started</Button>
        <FwNavbar.Toggle style={{ marginLeft: "0.5rem" }} />
      </div>
      <FwNavbar.Collapse>
        {["Home", "About", "Services", "Pricing"].map((item, i) => (
          <FwNavbar.Link key={i} href="#" active={i == 0 ? true : false}>
            {item}
          </FwNavbar.Link>
        ))}
      </FwNavbar.Collapse>
    </FwNavbar>
  );
};

export default Navbar;
