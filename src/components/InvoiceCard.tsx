import React from "react";
import "../styles/components/_invoiceCard.scss";

interface InvoiceCard {
  data: {
    ID: string;
    price: number;
    date: any;
    state: string;
    name: string;
    description: string;
  };
}

const InvoiceCard = (property: InvoiceCard) => {

    //destruct of object data
    const {ID, price, date, state, name, description} = property.data
    
  
    return (
    <a href="#">
      <section className="card mg-lr-26 mg-tb-1rem">
        <div className="card__data">
          <div className="card__data__group">
            <p className="card__number">#{ID}</p>
            <p className="date">{date}</p>
          </div>
          <div>
            <p>{name}</p>
            <p className="hide--sm date">{description}</p>
          </div>
        </div>
          
        
        <div className="card__data align--between"> 
          <div className="card__price">
            <p>{price}€</p>
          </div>
          <div className="card__status">
            <p>{state}</p>
          </div>
        </div>
          
        
      </section>
    </a>
  );
};

export default InvoiceCard;
