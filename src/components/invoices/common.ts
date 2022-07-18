export interface InvoiceToShow {
  ID: string;
  price: number;
  date: string;
  state: INVOICE_STATE;
  name: string;
  description: string;
}

export enum CLASS_TYPE {
    SUCCESS = 'success',
    WARNING = 'warning',
    DANGER = 'danger'
}

export enum INVOICE_STATE {
  PAID = 'paid',
  PENDING = 'pending',
  CANCELED = 'canceled'
}