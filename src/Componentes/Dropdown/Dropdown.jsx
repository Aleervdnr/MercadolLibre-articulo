import React from 'react'
import "./Dropdown.css"

function Dropdown({onMouseEnter,onMouseLeave}) {
  return (
    <ul className="dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <li className="dropdown_items">Vehiculos</li>
      <li className="dropdown_items">Inmuebles</li>
      <li className="dropdown_items">Supermercado</li>
      <li className="dropdown_items">Tecnologia</li>
      <li className="dropdown_items">Hogar y Muebles</li>
    </ul>
  )
}

export default Dropdown