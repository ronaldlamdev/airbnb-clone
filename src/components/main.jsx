import React from "react";
import PhotoGrid from '../images/photo-grid.png';
import Thumbnail1 from '../images/thumbnail-1.png';
import Thumbnail2 from '../images/thumbnail-2.png';
import Thumbnail3 from '../images/thumbnail-3.png';

const Main = () => {
  return(
    <main>
      <div>
        <img src={PhotoGrid} />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities 
        led by one-of-a-kind hosts—all 
        without leaving home.
      </p>
      <div>
        <img src={Thumbnail1}></img>
        <img src={Thumbnail2}></img>
        <img src={Thumbnail3}></img>
      </div>
    </main>
  )
}

export default Main