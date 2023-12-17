import React from 'react'
import { FaWhatsappSquare as Zap } from "react-icons/fa";
import Insta from '../imgs/Insta.png'
import '../pages/Home.css'
import { NavBarH } from '../components/NavBarH'
import { Link } from 'react-router-dom';

export const Sobre = () => {
  return (
    <>
      <h1 style={{ fontSize: '20px', fontFamily: 'Roboto', padding: '15px 0px 0px 0px', fontWeight: 'bold' }}>Sobre</h1>

      <div className='blockS'>
        <p style={{ fontSize: '15px', margin: '20px 0px 0px 0px', textAlign: 'center', padding: '20px 0px 0px 0px' }}>Criador</p>
        <div className='create'>
          <p style={{ padding: '20px 0px 0px 0px', display: 'flex' }}>Fiote</p>
          <Link to={'https://wa.me/qr/UD3THS5RLLSMC1'}>
            <Zap style={{ fontSize: '30px', display: 'flex', color: 'green', padding: '15px 0px 0px 0px' }} />
          </Link>

          <Link to={'https://www.instagram.com/b.guiaro/'}>
            <img src={Insta} alt='' className='insta' />
          </Link>
        </div>
        <p style={{ borderBottom: '1px solid white', width: '210px', margin: '5px 0px 0px 40px' }}></p>

        <p style={{ fontSize: '15px', margin: '50px 0px 0px 0px', textAlign: 'center', padding: '20px 0px 0px 0px' }}>Inspiração</p>
        <div className='inspiration'>
          <p style={{ padding: '20px 0px 0px 0px', display: 'flex' }}>Amanda</p>
          <Link to={'https://wa.me/qr/JKKNCQQZ4PPWM1'}>
            <Zap style={{ fontSize: '30px', display: 'flex', color: 'green', padding: '15px 0px 0px 0px' }} />
          </Link>

          <Link to={'https://www.instagram.com/mandyymonteleone/'}>
            <img src={Insta} alt='' className='insta' />
          </Link>
        </div>
        <p style={{ borderBottom: '1px solid white', width: '210px', margin: '5px 0px 0px 40px' }}></p>




      </div >

      <p style={{ fontSize: '13px', position: 'absolute', top: '86%', left: '76%' }}>Versao: 1.6</p>

      <NavBarH />
    </>
  )
}
