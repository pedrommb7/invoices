import React from "react";
import "../../styles/trumps/_button.scss";
import {ButtonProperties} from '../common';
import "../../styles/settings/_colors.scss";

const Button = (property: ButtonProperties) => {

  const {variant, type, text, alignment, flexflow, mgAmount, pdAmount, color, icon, onClick} = property

  return (
    <>
      <button
        type={type}
        className={`button--${variant} align--${alignment} flex-flow--${flexflow} mg--${mgAmount} pd--${pdAmount} color--${color}`}
        onClick={() => onClick()}
      >
        <>
          {icon.svg}
          {text}
        </>
      </button>
    </>
  );
};

export default Button;
