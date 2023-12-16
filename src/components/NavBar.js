import React from 'react'
import { BiSolidVideos as Video } from "react-icons/bi";
import { PiImageFill as Image } from "react-icons/pi";
import { AiOutlineQuestionCircle as Inte } from "react-icons/ai";
import { IoInformationCircleSharp as Sobre } from "react-icons/io5";
import '../pages/Home.css'
import { Link } from 'react-router-dom';
import { NavBarH } from './NavBarH';

export const NavBar = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>

        <Link to={'/video'} style={{ textDecoration: 'none' }}>
          <div className='boxHome'>
            <Video style={{ fontSize: '40px', color: 'white', padding: '30px 0px 0px 0px' }} />
            <p style={{ width: '100px', margin: '30px 0px 0px 25px', display: 'flex', color: 'black'}}>Videos</p>
          </div>
        </Link>

        <Link to={'/galeria'} style={{textDecoration: 'none'}}>
          <div className='boxImage'>
            <Image style={{ fontSize: '40px', color: 'white', padding: '30px 0px 0px 0px' }} />
            <p style={{ width: '100px', margin: '30px 0px 0px 35px', display: 'flex', color: 'black'}}>Fotos</p>
          </div>
        </Link>
      </div>


      <div style={{ display: 'flex' }}>
      <Link to={'/pergunta'} style={{textDecoration: 'none'}}>
        <div className='boxInte'>
          <Inte style={{ fontSize: '40px', color: 'white', padding: '30px 0px 0px 0px' }} />
          <p style={{ width: '100px', margin: '30px 0px 0px 22px', display: 'flex', color: 'black'}}>Duvidas</p>
        </div>
      </Link>

      <Link to={'/sobre'} style={{textDecoration: 'none'}}>
        <div className='boxSobre'>
          <Sobre style={{ fontSize: '40px', color: 'white', padding: '30px 0px 0px 0px' }} />
          <p style={{ width: '100px', margin: '30px 0px 0px 30px', display: 'flex', color: 'black'}}>Sobre</p>
        </div>
      </Link>
      </div>

    <NavBarH/>

    </>


  )
}
