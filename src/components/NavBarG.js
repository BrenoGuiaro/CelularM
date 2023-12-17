import React from 'react'
import Logo from '../imgs/Logo.png'
import { Link } from 'react-router-dom'

export const NavBarG = () => {
  return (
    <div className='navBarG'>
      <Link to={'/'} >
      <img src={Logo} alt='' style={{ width: '50px', height: '50px', padding: '6px 0px 0px 5px' }} />
      
      </Link>
    </div>
  )
}
