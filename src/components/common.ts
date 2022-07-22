import React from "react";

export interface InvoiceToShow {
  ID: string;
  price: number;
  date: string;
  state: INVOICE_STATE;
  name: string;
  description: string;
}

export interface ButtonProperties {
  variant?: "rounded" | "large" | "link";
  type: "submit" | "button";
  alignment?: "center" | "between"
  mgAmount?: "26" | "lr-26" | "tb-1rem";
  pdAmount?: "05rem" | "tp-15rem" | "bt-2rem";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  text?: string;
  icon: {svg?: JSX.Element, side?: "right" | "left"}
  onClick: () => void;
}

export enum CLASS_TYPE {
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    BUTTONROUNDED = 'button--rounded'
}

export enum INVOICE_STATE {
  PAID = 'paid',
  PENDING = 'pending',
  CANCELED = 'canceled'
}