import React from 'react'
import img1 from '../assets/img/antonx1.jpg'
import img2 from '../assets/img/antonx2.jpg'
import img3 from '../assets/img/antonx3.jpg'
import img4 from '../assets/img/antonX4.jpg'

export default function Slider1() {
  return (
    <div>
      <div className="carousel carousel-center slide  p-4 space-x-4  rounded-box">
  <div className="carousel-item">
    <img src={img1} className="rounded-box" width="700px" alt='img1' />
  </div> 
  <div className="carousel-item">
    <img src={img2} className="rounded-box" width="700px" alt='img2' />
  </div> 
  <div className="carousel-item">
    <img src={img3} className="rounded-box" width="700px" alt='img3'
    />
  </div> 
  <div className="carousel-item">
    <img src={img4} className="rounded-box" width="700px" alt='img4' />
  </div> 
  
</div>
    </div>
  )
}
