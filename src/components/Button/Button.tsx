import React from "react";
import { plusSVG } from "../../images/index";
import "./_newInvoiceButton.scss";

interface ButtonProperties {
  class: string;
  type: string;
  text?: string;
  svg?: JSX.Element;
  onClick: () => void;
}

const Button = (property: ButtonProperties) => {
  return (
    <>
      <button
        type="button"
        className={property.class}
        onClick={() => property.onClick()}
      >
        {property.svg}
        {property.text}
      </button>
    </>
  );
};

export default Button;
