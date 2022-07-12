import React from 'react'
import { plusSVG } from '../images/index';
import '../Styles/components/newInvoiceButton.scss';

interface NewInvoice {
    class: string
    text: string
}

const createNewInvoice = () => {

}


const NewInvoiceButton = (property: NewInvoice) => {
  return (
    <>
      <button type="button" className={property.class} onClick={createNewInvoice}>
          {plusSVG}
          <p>{property.text}</p>
      </button>
    </>
  )
}

export default NewInvoiceButton