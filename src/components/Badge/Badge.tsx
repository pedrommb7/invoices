import React from "react";
import { INVOICE_TYPE } from "../InvoiceCard/declarations";
import "./_badgeComponent.scss";

type BadgeComponent = {
  type: INVOICE_TYPE;
  text: string;
};

const BadgeComponent = (property: BadgeComponent) => {
  return <p className={`tag tag--${property.type}`}>{property.text}</p>;
};

export default BadgeComponent;
