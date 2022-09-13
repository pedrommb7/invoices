import React from "react";
import { InputProperties } from "./declarations";
import "./_styles.scss";

const Input = (properties: InputProperties) => {
  const { type, name, placeholder, minLength, maxLength } = properties;

  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
    </>
  );
};

export default Input;
