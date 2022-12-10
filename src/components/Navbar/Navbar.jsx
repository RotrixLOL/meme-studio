import React from "react";
import { Navbar as FwNavbar, Button, DarkThemeToggle } from "flowbite-react";
import BackArrow from "../BackArrow/BackArrow";

const Navbar = () => {
  return (
    <div className="relative">
      <FwNavbar fluid={true} rounded className="fixed w-[100vw] bg-white">
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
          <BackArrow className="mr-[1rem]" />
          <Button
            href={window.location.pathname == "/" ? "/templates" : "/login"}
          >
            {window.location.pathname == "/" ? "Create" : "Log in"}
          </Button>
          <FwNavbar.Toggle style={{ marginLeft: "0.5rem" }} />
        </div>
        <FwNavbar.Collapse>
          {["Home", "Discover", "Templates", "About"].map((item, i) => (
            <FwNavbar.Link
              key={i}
              href={item == "Home" ? "/" : item.toLowerCase()}
              active={i == 0 ? true : false}
            >
              {item}
            </FwNavbar.Link>
          ))}
        </FwNavbar.Collapse>
      </FwNavbar>
    </div>
  );
};

export default Navbar;
