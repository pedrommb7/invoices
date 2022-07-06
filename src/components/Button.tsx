import React from 'react'
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
      <button className={property.class} onClick={createNewInvoice}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="white"/>
            <path d="M23 16C23 15.4477 22.5523 15 22 15L17.3431 15L17.3431 10.3431C17.3431 9.79085 16.8954 9.34314 16.3431 9.34314C15.7909 9.34314 15.3431 9.79085 15.3431 10.3431L15.3431 15L10.6863 15C10.134 15 9.68629 15.4477 9.68629 16C9.68629 16.5523 10.134 17 10.6863 17L15.3431 17L15.3431 21.6568C15.3431 22.2091 15.7909 22.6568 16.3431 22.6568C16.8954 22.6568 17.3431 22.2091 17.3431 21.6568L17.3431 17L22 17C22.5523 17 23 16.5523 23 16Z" fill="#6DC7C7"/>
          </svg>
          <p>{property.text}</p>
      </button>
    </>
  )
}

export default NewInvoiceButton