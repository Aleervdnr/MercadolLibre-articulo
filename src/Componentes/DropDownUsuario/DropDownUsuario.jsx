import React from 'react'
import "./DropDownUsuario.css"
import {RiUserAddLine} from "react-icons/ri"
import nivel from "../../img/nivel.svg"

function DropDownUsuario() {
  return (
    <nav className="user-menu">
      <div className="user-menu_main">
        <div className="user-menu_icon-container">
        <RiUserAddLine className='user-menu_icon'/>
        </div>
        <div className="user-menu_main-text-container">
          <span className='text-saludo'>Hola Usuario</span>
          <h3>Nivel 2 - Mercado Puntos</h3>
          <img src={nivel} alt="" className='user-menu_img-nivel'/>
        </div>
      </div>
      <div className="user-menu_items">
        <hr />
        <li className="user-menu_item">Compras</li>
        <li className="user-menu_item">Preguntas</li>
        <hr />
        <li className="user-menu_item">Mercado Credito</li>
        <li className="user-menu_item">Peliculas y series</li>
        <li className="user-menu_item">Mi perfil</li>
        <hr />
        <li className="user-menu_item">Vender</li>
        <hr />
        <li className="user-menu_item">Salir</li>
      </div>
    </nav>
  )
}

export default DropDownUsuario