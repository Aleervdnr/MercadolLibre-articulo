import React, {useState} from 'react'
import "./Producto.css"
import Galeria from '../Galeria/Galeria'
import {AiOutlineHeart, AiFillHeart,AiOutlineShareAlt} from "react-icons/ai"
import {MdVerified} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"

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

              <div className="price">
              <span>$</span>320.000
            </div>

            <div className="buttons-container">
              <div className="button">Preguntar</div>
            </div>

            <div className="ayuda">
              <span>¿Tuviste un problema con la publicación?</span>
              <a href="#">Avisanos.</a>
            </div>
            </div>
          </div>
      </div>
    )
  } else{
    return (
      <div className="producto">
        <div className="principal_card">
          <span className="subtitle">2022 | 0 km · Publicado hace 10 meses</span>
          <h1 className="title">Honda New Wave 110 S 2022 0KM</h1>
          <div className="verify">
                Vendedor con <span>identidad verificada</span> <MdVerified className='verify-icon'/>
          </div>
        </div>
        <Galeria/>
        <div className="price">
          <span>$</span>320.000
        </div>

        <div className="buttons-container">
          <div className="button">Preguntar</div>
          <div className="button"><BsWhatsapp/> Whatsapp</div>
        </div>

        <div className="ayuda">
          <span>¿Tuviste un problema con la publicación?</span>
          <a href="#">Avisanos.</a>
        </div>

        <div className="compartir">
          <div className="fav" onClick={()=> setFav(!fav)}>
          {fav ? <AiFillHeart className='heart-icon-active'/> : <AiOutlineHeart className='heart-icon'/>}
          <span>Agregar a favoritos</span>
          </div>

          <div className="compartir-button">
            <AiOutlineShareAlt className='share-icon'/> <span>Compartir</span>
          </div>
        </div>
      </div>
    )
  }
}
