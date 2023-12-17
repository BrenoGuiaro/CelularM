import React from 'react'
import { NavBarV } from '../components/NavBarV'
import imgC from '../imgs/Constrution.jpg'

export const FotosNossas = () => {
  return (
    <>
      <div style={{ padding: '50px 0px 0px 0px' }}>
        <img src={imgC} alt='' style={{ width: '100%', height: 'auto' }} />
      </div>
      <NavBarV />
    </>

  )
}
