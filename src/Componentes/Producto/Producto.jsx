import React from 'react'
import "./Producto.css"
import Galeria from '../Galeria/Galeria'

export default function Producto() {
  return (
    <div className="producto">
      <div className="column-left">
          <Galeria/>
        <div className="texto"></div>
      </div>

      <div className="column-right"></div>
    </div>
  )
}
