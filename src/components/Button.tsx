import React from "react";
import { plusSVG } from "../images/index";
import "../Styles/components/newInvoiceButton.scss";

interface NewInvoice {
  class: string;
  text: string;
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
        {plusSVG}
        <p>{property.text}</p>
      </button>
    </>
  );
};

export default Button;
