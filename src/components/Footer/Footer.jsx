import React from "react";
import { Footer as FwFooter } from "flowbite-react";

const Footer = () => {
  return (
    <FwFooter container={true} className="sticky">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FwFooter.Brand
            href="/"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Meme Studio Logo"
            name="Meme Studio"
          />
          <FwFooter.LinkGroup className="md:gap-4 gap-1">
            <FwFooter.Link href="/about">About</FwFooter.Link>
            <FwFooter.Link href="https://github.com/RotrixLOL/meme-studio">
              Repo
            </FwFooter.Link>
            <FwFooter.Link href="https://github.com/RotrixLOL/meme-studio/blob/main/LICENSE">
              License
            </FwFooter.Link>
          </FwFooter.LinkGroup>
        </div>
        <FwFooter.Divider />
        <FwFooter.Copyright href="#" by="Meme Studio" year={2022} />
      </div>
    </FwFooter>
  );
};

export default Footer;
