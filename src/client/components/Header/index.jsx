import React from 'react'
import { Link } from 'react-router-dom'
import auchanLogo from '../../auchan-logo.png'
import './style.scss'

const Header = () => {
  return (
    <div className='header'>
        <Link to='/'>
          <img className='header__logo' src={auchanLogo} alt='auchan-logo' />
        </Link>
    </div>
  )
}

export default Header;