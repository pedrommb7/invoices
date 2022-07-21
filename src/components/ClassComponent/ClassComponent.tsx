import React from 'react'
import {CLASS_TYPE} from '../common'
import './_classComponent.scss';

type StatusClass = {
    class: CLASS_TYPE;
    text: string;
}

const ClassComponent = (property: StatusClass) => {
  return (
    <p className={`tag tag--${property.class}`}>{property.text}</p>
  )
}

export default ClassComponent