import React, {useState} from 'react'
import "./Producto.css"
import Galeria from '../Galeria/Galeria'
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai"
import {MdVerified} from "react-icons/md"

export default function Producto({width}) {

  const [fav, setFav] = useState(false)
  if(width){
    return (
      <div className="producto">
          <Galeria/>
  
          <div className="texto">
            <div className="principal_card">
              <span className="subtitle">2022 | 0 km · Publicado hace 10 meses</span>
              <div className="container-title">
                <h1 className="title">Honda New Wave 110 S 2022 0KM</h1>
                <div className="fav" onClick={()=> setFav(!fav)}>
                  {fav ? <AiFillHeart className='heart-icon-active'/> : <AiOutlineHeart className='heart-icon'/>}
                </div>
              </div>
  
              <div className="verify">
                Vendedor con <span>identidad verificada</span> <MdVerified className='verify-icon'/>
              </div>
            </div>
          </div>
      </div>
    )
  } else{
    return (
      <div className="producto">
        <div className="princinpal_card">
          <span className="subtitle">2022 | 0 km · Publicado hace 10 meses</span>
          <h1 className="title">Honda New Wave 110 S 2022 0KM</h1>
          <div className="verify">
                Vendedor con <span>identidad verificada</span> <MdVerified className='verify-icon'/>
          </div>
        </div>
        <Galeria/>
      </div>
    )
  }
}
