import React from 'react';

const Nav = () => {

  return (
    <div className="header">
      <div className="container">
        <nav>
          <h3 className="logo"><span>A</span>man</h3>
          <ul className="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li> 
          </ul>
        </nav>
        <div className="header-text">
          <h1>Hi, I'm <span>Aman Verma</span><br /> from Lucknow</h1>
          <p className='adarsh'>Full Stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
