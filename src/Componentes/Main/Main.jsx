import React from 'react'
import "./Main.css"
import {BsChevronRight} from "react-icons/bs"
import Producto from '../Producto/Producto'

function Main({width}) {
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
              <a href="#" className="breadcrumb_link">Autos,Motos y Otros</a>
              <BsChevronRight className='asd'/>
              <a href="#" className="breadcrumb_link">Motos</a>
              <BsChevronRight className='asd'/>
              <a href="#" className="breadcrumb_link">Scooters</a>
              <BsChevronRight className='asd'/>
              <a href="#" className="breadcrumb_link">Honda</a>
              <BsChevronRight className='asd'/>
              <a href="#" className="breadcrumb_link">Wave 110</a>
            </nav>
          </div>

        </div>

        <div className="share">
          <a href="#" className='share_link'>Compartir</a>
          <a href="#">Vender uno igual</a>
        </div>
      </div>

      <Producto width={width} />
    </main>
  )
}

export default Main