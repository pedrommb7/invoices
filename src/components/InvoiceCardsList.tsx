import React from 'react'
import InvoiceCard from './InvoiceCard';

const InvoiceCardsList = () => {
  return (
    <>
        <InvoiceCard data={{price: 200, name:"John Stephen", date:"Due DD-MM-YYYY", state:"Paid", ID:"INV_X", profession:"Graphic Design"}}/>
        <InvoiceCard data={{price: 200, name:"Name", date:"Due DD-MM-YYYY", state:"Paid", ID:"INV_X", profession:"Graphic Design"}}/>
        <InvoiceCard data={{price: 200, name:"Name", date:"Due DD-MM-YYYY", state:"Paid", ID:"INV_X", profession:"Graphic Design"}}/>
        <InvoiceCard data={{price: 200, name:"Name", date:"Due DD-MM-YYYY", state:"Paid", ID:"INV_X", profession:"Graphic Design"}}/>
        <InvoiceCard data={{price: 200, name:"Name", date:"Due DD-MM-YYYY", state:"Paid", ID:"INV_X", profession:"Graphic Design"}}/>
    </>
  )
}

export default InvoiceCardsList