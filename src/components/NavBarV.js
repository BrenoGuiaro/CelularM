import React from 'react'
import { IoIosReturnLeft as Seta } from "react-icons/io";
import { Link } from 'react-router-dom'

export const NavBarV = () => {
  return (
    <div className='navBar'>
      <Link to={'/galeria'} >
      <Seta style={{fontSize: '50px' , color: 'white'}}/>
      </Link>
    </div>
  )
}
