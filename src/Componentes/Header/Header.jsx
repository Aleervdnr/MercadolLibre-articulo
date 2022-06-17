import React, { useState } from 'react'
import "./Header.css"
import { BiUserCircle } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import { BsCart2 } from 'react-icons/bs';
import img from "../../img/disney.webp"
import logo from "../../img/logo.png"
import Dropdown from '../Dropdown/Dropdown';


function Header() {
  const [dropDownCategoria, setDropDownCategoria] = useState(false)

  const onMouseEnterCategoria = () => setDropDownCategoria(true)
  const onMouseLeaveCategoria = () => setDropDownCategoria(false)
  
  const [dropDownUsuario, setDropDownUsuario] = useState(false)

  const onMouseEnterUsuario = () => setDropDownUsuario(true)
  const onMouseLeaveUsuario = () => setDropDownUsuario(false)
  return (
    <header className='header'>
      <div className="header-container">

        <div className="logo">
          <img src={logo} alt="" className='logo-img'/>
        </div>

        <form className='search'>
          <input type="text" name="" id="" placeholder='Buscar productos, marcas y más…' className='search_input' />
          <button className='search_button'></button>
        </form>

        <div className="header_disney">
          <img src={img} alt="disney start" className='disney-img'/>
        </div>


        <div className="header_envio">
            <span className='envio_usuario'>Enviar a Usuario</span>
            <span className='envio_direccion'>Calle Falsa 123</span>
        </div>

        <div className="header_menu-list">
          <ul className='header_ul'>
            <li className='menu-list-item' onMouseEnter={onMouseEnterCategoria} onMouseLeave={onMouseLeaveCategoria}>Categorias<span className="chevron"></span> {dropDownCategoria && <Dropdown onMouseEnter={onMouseEnterCategoria} onMouseLeave={onMouseLeaveCategoria}/>}</li>
            <li className='menu-list-item'>Ofertas</li>
            <li className='menu-list-item'>Historial</li>
            <li className='menu-list-item'>Supermercado</li>
            <li className='menu-list-item'>Moda</li>
            <li className='menu-list-item'>Vender</li>
            <li className='menu-list-item'>Ayuda</li>
          </ul>
        </div>

        <nav className="header_menu-nav">
          <ul className='header_ul'>
            <li className='menu-nav-item'  onMouseEnter={onMouseEnterUsuario} onMouseLeave={onMouseLeaveUsuario}><BiUserCircle className='menu-nav_icon'/> Usuario <span className="chevron"></span>
            {dropDownUsuario && <Dropdown onMouseEnter={onMouseEnterUsuario} onMouseLeave={onMouseLeaveUsuario}/>}
            </li>
            <li className='menu-nav-item'>Mis compras</li>
            <li className='menu-nav-item'>Favoritos <span className="chevron"></span></li>
            <li className='menu-nav-item'><IoNotificationsOutline className='icon'/></li>
            <li className='menu-nav-item'><BsCart2 className='icon'/> </li>
          </ul>
        </nav>


      </div>
    </header>
  )
}

export default Header