import Button from "components/Button/Button";
import { ChevronSVG } from "images";
import React from "react";
import "../Button/_button.scss";
import "./_styles.scss";

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <a href="/" className="button--link">
        Invoices
      </a>

      {<ChevronSVG className="fill--black" />}

      <a href="#" className="button--link" id="createInvoice">
        Create invoice
      </a>
    </nav>
  );
};

export default Breadcrumb;
