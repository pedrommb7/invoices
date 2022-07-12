import React from 'react'
import { moonSVG } from '../images/index'

const Header = () => {
  return (
    <header>
        <nav className='nav-header'>
          <button type="button" className='hamburguer mg-26 hide'>
            <hr />
            <hr className='hamburguer__half-line' />
            <hr />
          </button>
          <button type="button" className='mg-26'>
            {moonSVG}
          </button>
        </nav>
    </header>
  )
}

export default Header