import React from 'react'
import { moonSVG } from '../images/index'
import Button from './Button'

const darkMode = () => {}

const Header = () => {
  return (
    <header>
        <nav className='nav-header'>
          <button type="button" className='hamburguer mg-26 hide'>
            <hr />
            <hr className='hamburguer__half-line' />
            <hr />
          </button>
          <Button class='mg-26' svg={moonSVG} onClick={darkMode} />
          
        </nav>
    </header>
  )
}

export default Header