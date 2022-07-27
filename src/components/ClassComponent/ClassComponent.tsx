import React from 'react'
import {INVOICE_TYPE} from '../common'
import './_classComponent.scss';

type ClassComponent = {
    class: INVOICE_TYPE;
    text: string;
}

const ClassComponent = (property: ClassComponent) => {
  return (
    <p className={`tag tag--${property.class}`}>{property.text}</p>
  )
}

export default ClassComponent