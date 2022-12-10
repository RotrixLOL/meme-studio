import React from "react";
import Text from "../Text/Text";

const Title = ({ children }) => {
  return (
    <Text position="center" size="5xl" sm_size="3xl" div_style="mb-5">
      {children}
    </Text>
  );
};

export default Title;
