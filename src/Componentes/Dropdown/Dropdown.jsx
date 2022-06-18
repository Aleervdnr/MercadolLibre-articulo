import React from 'react'
import "./Dropdown.css"

function Dropdown() {
  return (
    <ul className="dropdown">
      <li className="dropdown_items">Vehiculos</li>
      <li className="dropdown_items">Inmuebles</li>
      <li className="dropdown_items">Supermercado</li>
      <li className="dropdown_items">Tecnologia</li>
      <li className="dropdown_items">Hogar y Muebles</li>
    </ul>
  )
}

export default Dropdown