import React from "react";
import { Footer as FwFooter } from "flowbite-react";

const Footer = () => {
  return (
    <Footer container={true}>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FwFooter.Brand
            href="/"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Meme Studio Logo"
            name="Meme Studio"
          />
          <FwFooter.LinkGroup>
            <FwFooter.Link href="#">About</FwFooter.Link>
            <FwFooter.Link href="#">Privacy Policy</FwFooter.Link>
            <FwFooter.Link href="#">License</FwFooter.Link>
            <FwFooter.Link href="#">Contact</FwFooter.Link>
          </FwFooter.LinkGroup>
        </div>
        <FwFooter.Divider />
        <FwFooter.Copyright href="#" by="Meme Studio" year={2022} />
      </div>
    </Footer>
  );
};

export default Footer;
