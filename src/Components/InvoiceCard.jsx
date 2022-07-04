import React from 'react'
import '../Styles/Components/invoiceCard.scss';

const InvoiceCard = () => {
  return (
    <section className='card mg-lr-26 mg-tb-16'>
        <div className='heading'>
            <p className='invoice-number'>#INV_X</p>
            <p>Name</p>
        </div>

        <section className="payment-status">
            <div className='payment'>
                <p>Due DD MM YYYY</p>
                <p className='price'>556.00€</p>
            </div>
            <div className="status">
                <span>Paid</span>
            </div>
        </section>
        
        
    </section>
  )
}

export default InvoiceCard