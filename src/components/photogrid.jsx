import React from "react";
import PhotoGrid from '../images/photo-grid.png';

const ImageGrid = () => {
  return(
    <div>
      <div>
        <img src={PhotoGrid} />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities 
        led by one-of-a-kind hosts—all 
        without leaving home.
      </p>
    </div>
  )
}

export default ImageGrid;