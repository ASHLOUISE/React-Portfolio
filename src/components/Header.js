import React from 'react';
import logoImage from '../assets/Frenchie.png'; 

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoImage} alt="Your Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
