import React from 'react';
import Logo from '../images/airbnb-logo.png';

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} className="logo"></img>
    </nav>
  )
};

export default Navbar;