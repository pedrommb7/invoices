import React from "react";
import "./_button.scss";
import { ButtonProperties } from "./declarations";

const Button = (property: ButtonProperties) => {
  const { variant, type, text, flexflow, icon, id, onClick } = property;

  return (
    <>
      <button
        type={type}
        id={id}
        className={`button--${variant} flex-flow--${flexflow}`}
        onClick={() => onClick()}
      >
        <>
          {icon}
          {text}
        </>
      </button>
    </>
  );
};

export default Button;
