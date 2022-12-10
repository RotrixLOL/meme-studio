import { Label, TextInput } from "flowbite-react";
import React from "react";

const Input = ({ title, id, type, required, placeholder, onChange, value }) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor={id}
          value={title}
          className="text-base font-extralight"
        />
      </div>
      <TextInput
        onChange={onChange}
        value={value}
        id={id}
        type={type}
        required={required}
        className="flex-1 md:w-[50vw]"
        placeholder={placeholder || "Start typing..."}
      />
    </div>
  );
};

export default Input;
