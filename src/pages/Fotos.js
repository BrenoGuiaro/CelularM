import React from 'react'
import { NavBarH } from '../components/NavBarH'
import { Link } from 'react-router-dom';
import { FaFolder as Pasta } from "react-icons/fa";
import '../pages/Home.css'

export const Fotos = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Link to={'/ela'} style={{textDecoration: 'none'}}>
          <div className='ela'>
            <Pasta style={{ fontSize: '40px', color: 'white', padding: '30px 0px 0px 0px' }} />
            <p style={{ width: '100px', margin: '30px 0px 0px 0px', display: 'flex', alignItems: 'start' , color: 'black'}}>Fotos do meu amor</p>
          </div>
        </Link>

        <Link to={'/nossa'} style={{ textDecoration: 'none' }}>
          <div className='n2'>
            <Pasta style={{ fontSize: '40px', color: 'white', padding: '30px 0px 0px 0px' }} />
            <p style={{ width: '100px', margin: '30px 0px 0px 0px', display: 'flex', alignItems: 'start', color: 'black' }}>Fotos Nossas</p>
          </div>
        </Link>


      </div>







      <NavBarH />
    </>
  )
}
