import React from 'react'
import InvoiceCard from './InvoiceCard';

const InvoiceCardsList = () => {
  return (
    <>
        <InvoiceCard data={{price: 20, name:"Name", date:"Due DD-MM-YYYY", paid:"paid", INV_X:"INV_X"}}/>
        <InvoiceCard data={{price: 20, name:"Name", date:"Due DD-MM-YYYY", paid:"paid", INV_X:"INV_X"}}/>
        <InvoiceCard data={{price: 20, name:"Name", date:"Due DD-MM-YYYY", paid:"paid", INV_X:"INV_X"}}/>
        <InvoiceCard data={{price: 20, name:"Name", date:"Due DD-MM-YYYY", paid:"paid", INV_X:"INV_X"}}/>
        <InvoiceCard data={{price: 20, name:"Name", date:"Due DD-MM-YYYY", paid:"paid", INV_X:"INV_X"}}/>
    </>
  )
}

export default InvoiceCardsList