import React from 'react';
import logoImage from '../images/Frenchie.png';


const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <div className="logo">Ashley Paluzzi</div>
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
