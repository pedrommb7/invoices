import React from "react";
import "../Styles/components/invoiceCard.scss";

interface InvoiceCard {
  data: {
    INV_X: string;
    price: number;
    date: any;
    paid: string;
    name: string;
  };
}

const InvoiceCard = (property: InvoiceCard) => {

    //destruct of object data
    const {INV_X, price, date, paid, name} = property.data
  
    return (
    <section className="card mg-lr-26 mg-tb-16">
      <div className="heading">
        <p className="invoice-number">{INV_X}</p>
        <p>{name}</p>
      </div>

      <section className="payment-status">
        <div className="payment">
          <p>{date}</p>
          <p className="price">{price}</p>
        </div>
        <div className="status">
          <span>{paid}</span>
        </div>
      </section>
    </section>
  );
};

export default InvoiceCard;
