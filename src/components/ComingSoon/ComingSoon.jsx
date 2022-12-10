import { Button } from "flowbite-react";
import React from "react";
import Title from "../Title/Title";

const ComingSoon = ({ msg }) => {
  return (
    <div className="h-[100vh] flex flex-col text-center py-0">
      <Title>Coming soon...</Title>
      <h2 className="flex justify-center font-semibold text-3xl">
        {msg}
        <Button className="ml-2" size="md" href="/">
          Go back
        </Button>
      </h2>
      <div className="flex flex-col mt-2 self-center">
        <iframe
          src="https://giphy.com/embed/YV46Vyr4Tx8j8pHW3R"
          width="480"
          height="270"
        />
      </div>
    </div>
  );
};

export default ComingSoon;
