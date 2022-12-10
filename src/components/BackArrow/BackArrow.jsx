import { Button } from "flowbite-react";
import React from "react";
import { BsArrow90DegLeft as ArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackArrow = ({ className, rounded }) => {
  const navigate = useNavigate();
  return (
    <Button
      pill={rounded}
      outline
      gradientDuoTone="cyanToBlue"
      size="lg"
      className={className}
      onClick={() => navigate(-1)}
    >
      <ArrowLeft />
    </Button>
  );
};

export default BackArrow;
