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
  variant?: "primary" | "pill" | "add" | "link";
  type: "submit" | "button";
  alignment?: "center" | "between"
  flexflow?: "row-reverse" | "column-reverse"
  mgAmount?: "26" | "lr-26" | "lr-2rem" | "tb-1rem" | "tb-2rem";
  pdAmount?: "05rem" | "tp-15rem" | "bt-2rem";
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  text?: string;
  icon: {svg?: JSX.Element, side?: "right" | "left"}
  onClick: () => void;
}

export enum INVOICE_TYPE {
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger',
    BUTTONPRIMARY = 'button--primary'
}

export enum INVOICE_STATE {
  PAID = 'paid',
  PENDING = 'pending',
  CANCELED = 'canceled'
}