import React from 'react'
import InvoiceCard from './InvoiceCard';

const InvoiceCardsList = () => {
  return (
    <ul>
      <li>
        <InvoiceCard data={{price: 200, name:"John Stephen", date:"Due DD-MM-YYYY", state:"Paid", ID:"INV_X", description:"Graphic Design"}}/>
      </li>
      <li>
        <InvoiceCard data={{price: 200, name:"Name", date:"Due DD-MM-YYYY", state:"Paid", ID:"INV_X", description:"Graphic Design"}}/>
      </li>
      <li>
        <InvoiceCard data={{price: 200, name:"Name", date:"Due DD-MM-YYYY", state:"Paid", ID:"INV_X", description:"Graphic Design"}}/>
      </li>
      <li>
        <InvoiceCard data={{price: 200, name:"Name", date:"Due DD-MM-YYYY", state:"Paid", ID:"INV_X", description:"Graphic Design"}}/>
      </li>
      <li>
        <InvoiceCard data={{price: 200, name:"Name", date:"Due DD-MM-YYYY", state:"Paid", ID:"INV_X", description:"Graphic Design"}}/>
      </li>
         
    </ul>
  )
}

export default InvoiceCardsList