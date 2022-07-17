import React from "react";
import PhotoGrid from '../images/photo-grid.png';

const ImageGrid = () => {
  return(
    <section className="hero">  
      <img src={PhotoGrid} className="photo-grid" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-info">
        Join unique interactive activities 
        led by one-of-a-kind hosts—all 
        without leaving home.
      </p>
    </section>
  )
}

export default ImageGrid;