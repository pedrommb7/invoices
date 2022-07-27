import "./_invoiceCard.scss";
import "../../styles/trumps/_margins.scss"
import ClassComponent from "components/ClassComponent/ClassComponent";
import { InvoiceToShow, INVOICE_STATE, INVOICE_TYPE } from "../common";

interface InvoiceCard {
  data: InvoiceToShow;
}

const InvoiceCard = (property: InvoiceCard) => {
  //destruct of object data
  const { ID, price, date, state, name, description } = property.data;


  const stateStyling = () => {
    switch(state) {
      case INVOICE_STATE.PAID:
        return INVOICE_TYPE.SUCCESS;
      
      case INVOICE_STATE.PENDING:
        return INVOICE_TYPE.WARNING;
      
      default:
        return INVOICE_TYPE.DANGER;
    }
  }

  const strg = state;
  const stateToUpperCase = strg.charAt(0).toUpperCase() + strg.slice(1);

    return (
      <a href="#">
        <section className="card mg--lr-26 mg--tb-1rem">
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
              <ClassComponent class={stateStyling()} text={stateToUpperCase}/>
            </div>
          </div>
        </section>
      </a>
    );
};

export default InvoiceCard;
