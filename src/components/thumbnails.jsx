import React from "react";
import Thumbnail1 from '../images/thumbnail-1.png';
import Thumbnail2 from '../images/thumbnail-2.png';
import Thumbnail3 from '../images/thumbnail-3.png';

const Thumbnails = () => {
  return (
    <div>
        <img src={Thumbnail1}></img>
        <img src={Thumbnail2}></img>
        <img src={Thumbnail3}></img>
      </div>
  )
};

export default Thumbnails;