import React from "react";
import "../Styles/components/invoiceCard.scss";

interface InvoiceCard {
  data: {
    ID: string;
    price: number;
    date: any;
    state: string;
    name: string;
  };
}

const InvoiceCard = (property: InvoiceCard) => {

    //destruct of object data
    const {ID, price, date, state, name} = property.data
  
    return (
    <section className="card mg-lr-26 mg-tb-16">
      <div className="card__heading">
        <p className="invoice-number">{ID}</p>
        <p>{name}</p>
      </div>

      <section className="payment-status">
        <div className="payment-status__payment">
          <p>{date}</p>
          <p className="price">{price}</p>
        </div>
        <div className="payment-status__status">
          <span>{state}</span>
        </div>
      </section>
    </section>
  );
};

export default InvoiceCard;
