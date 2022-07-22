import React from "react";
import "./_newInvoiceButton.scss";
import {ButtonProperties} from '../common';
import "../../styles/settings/_colors.scss";


const Button = (property: ButtonProperties) => {

  const {variant, type, text, alignment, mgAmount, pdAmount, color, icon, onClick} = property

  return (
    <>
      <button
        type={type}
        className={`button--${variant} align--${alignment} margin--${mgAmount} padding--${pdAmount} color--${color}`}
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
