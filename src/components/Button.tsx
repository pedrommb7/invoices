import React from "react";
import { plusSVG } from "../images/index";
import "../styles/components/_newInvoiceButton.scss";

interface NewInvoice {
  class: string;
  text?: string;
  svg?: JSX.Element;
  onClick: () => void;
}

const Button = (property: NewInvoice) => {
  return (
    <>
      <button
        type="button"
        className={property.class}
        onClick={() => property.onClick()}
      >
        {property.svg}
        <p>{property.text}</p>
      </button>
    </>
  );
};

export default Button;
