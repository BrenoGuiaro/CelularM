import React from 'react'
import { NavBarH } from '../components/NavBarH'
import img from '../imgs/duvida.jpg'
import { Link } from 'react-router-dom'

export const Pergunta = () => {

  function sim(){
    const ver = document.querySelector('.verMais')
    const btnS =document.querySelector('.btnS')
    btnS.style.background = 'green'
    btnS.style.color = 'white'
    
    const btnN =document.querySelector('.btnN')
    btnN.style.background = ''
    btnN.style.color = ''
    
    const div = document.querySelector('.resposta')
    div.textContent = 'ACERTOU ✅'
    div.style.background = '#c9c9c9'
    div.style.color = 'green'
    ver.textContent = 'Ver mais'
  }

  function nao(){
    const div = document.querySelector('.resposta')
    const btnN =document.querySelector('.btnN')
    btnN.style.background = 'red'
    btnN.style.color = 'white'
    const btnS =document.querySelector('.btnS')
    btnS.style.background = ''
    btnS.style.color = ''
    const ver = document.querySelector('.verMais')
    ver.textContent =''
    div.textContent = 'VC É CEGO CARALHO? 🤬'
    div.style.background = '#c9c9c9'
    div.style.color = 'red'
  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '80px 0px 0px', flexDirection: 'column' }}>
        <img src={img} alt='' className='duvida' />
        <h1 style={{ padding: '30px 0px 0px 0px' }}>A Amanda é linda?</h1>
        <div style={{display: 'flex', margin: '10px 0px 0px 0px', width: '290px', justifyContent: 'space-between'}}>
          <button className='btnS'  onClick={sim}>Sim</button>
          <button className='btnN' onClick={nao}>Não</button>
        </div>
        <div className='resposta'></div>
        <Link to={'/ela'}><p className='verMais'></p></Link>
      </div>
      <NavBarH />
    </>
  )
}
