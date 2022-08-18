import React from "react";
import "../../styles/trumps/_button.scss";
import { ButtonProperties } from "./declarations";
import "../../styles/settings/_colors.scss";

const Button = (property: ButtonProperties) => {
  const {
    variant,
    type,
    text,
    alignment,
    flexflow,
    mgAmount,
    pdAmount,
    color,
    icon,
    id,
    onClick,
  } = property;

  return (
    <>
      <button
        type={type}
        id={id}
        className={`button--${variant} flex--${alignment} flex-flow--${flexflow} mg--${mgAmount} pd--${pdAmount} color--${color}`}
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
