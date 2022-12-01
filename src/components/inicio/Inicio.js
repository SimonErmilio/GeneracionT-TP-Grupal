import React from 'react'
import imagen from '../Assets/imgs/CaraYBaltimore.svg'
import image from '../Assets/imgs/untitled.png'

import './inicio.css'
import '../main.css'

export default function Inicio() {
  return (
    <body>
      <div className='imagen'>
          <img src={imagen}/>
      </div>
      <div  className='text'>
          Libros y Cafe
      </div>
    </body>
  )
}
