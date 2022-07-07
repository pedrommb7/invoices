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

        <div className="card__invoiceAnddate">
          <p className="invoice-number">{ID}</p>
          <p>{date}</p>
        </div>
        <div className="card__userInfo">
          <p>{name}</p>
          <p className="hide">{profession}</p>
        </div>
      


        <div className="payment-status__price">
          <p className="price">{price}</p>
        </div>
        <div>
          <span>{state}</span>
        </div>
      
      
      
    </section>
  );
};

export default InvoiceCard;
