import React from 'react'
import img1 from "../../img/New-wave.jpg"
import img2 from "../../img/honda-wave-110-s-gallery-ffffff-120180507194129.jpg"
import "./Galeria.css"


export default function Galeria() {
  return (
    <div className="galeria-container">
      <div className="galeria">
        <div className="galeria_item">
          <img src={img1} alt="" className='galeria_item-img'/>
        </div>
        <div className="galeria_item">
          <img src={img2} alt="" className='galeria_item-img'/>
        </div>
      </div>
      <div className="galeria-img">
        <img src="" alt="" className='galeria_display' />
      </div>
  </div>
  )
}
