import React from 'react'
import "./Main.css"
import {BsChevronRight} from "react-icons/bs"
import Producto from '../Producto/Producto'

function Main() {
  return (
    <main className="main">
      <div className="row hidden">
        <div className="relacionado">
          <div className="interes">
            <span>También puede interesarte:</span>
            <a href="#">link</a>
            -
            <a href="#">link</a>
            -
            <a href="#">link</a>
            -
            <a href="#">link</a>
            -
            <a href="#">link</a>
            -
            <a href="#">link</a>
          </div>

          <div className="breadcrumb">
            <a href="#" className='breadcrumb_volver'>Volver al listado</a>
            <nav>
              <a href="#" className="breadcrumb_link">Herramientas</a>
              <BsChevronRight className='asd'/>
              <a href="#" className="breadcrumb_link">Herramientas Eléctricas</a>
              <BsChevronRight className='asd'/>
              <a href="#" className="breadcrumb_link">Perforación</a>
              <BsChevronRight className='asd'/>
              <a href="#" className="breadcrumb_link">Taladros</a>
              <BsChevronRight className='asd'/>
              <a href="#" className="breadcrumb_link">De Mano</a>
            </nav>
          </div>

        </div>

        <div className="share">
          <a href="#" className='share_link'>Compartir</a>
          <a href="#">Vender uno igual</a>
        </div>
      </div>

      <Producto/>
    </main>
  )
}

export default Main