import React from 'react'
import "./Header.css"
import { BiMap } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BsCart2 } from 'react-icons/bs';


function Header() {
  return (
    <header className='header'>
      <div className="header-container">

        <div className="logo">logo</div>

        <form>
          <input type="text" name="" id="" />
          <button>lupa</button>
        </form>

        <div className="header_disney"></div>


        <div className="header_envio">
          <span><BiMap/> Enviar a Usuario</span>
          <span>Calle Falsa 1312</span>
        </div>

        <div className="header_menu-list">
          <ul>
            <li>Categorias</li>
            <li>Ofertas</li>
            <li>Historial</li>
            <li>Supermercado</li>
            <li>Moda</li>
            <li>Vender</li>
            <li>Ayuda</li>
          </ul>
        </div>

        <nav className="header_menu-nav">
          <ul>
            <li>Usuario</li>
            <li>Mis compras</li>
            <li>Favoritos</li>
            <li><IoMdNotificationsOutline/></li>
            <li><BsCart2/> </li>
          </ul>
        </nav>


      </div>
    </header>
  )
}

export default Header