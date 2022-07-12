import React from "react";
import "../Styles/components/invoiceCard.scss";

interface InvoiceCard {
  data: {
    ID: string;
    price: number;
    date: any;
    state: string;
    name: string;
    profession: string;
  };
}

const InvoiceCard = (property: InvoiceCard) => {

    //destruct of object data
    const {ID, price, date, state, name, profession} = property.data
  
    return (
    <section className="card mg-lr-26 mg-tb-16">
      <div className="card__data">
        <div className="card__data__invoice-date">
          <p className="invoice-number">#{ID}</p>
          <p className="date">{date}</p>
        </div>
        <div className="card__data__userinfo">
          <p>{name}</p>
          <p className="hide">{profession}</p>
        </div>
      </div>
        
      
      <div className="card__payment-status">
        <div className="card__payment-status__price">
          <p>{price}€</p>
        </div>
        <div className="card__payment-status__status">
          <p>{state}</p>
        </div>
      </div>
        
      
    </section>
  );
};

export default InvoiceCard;
