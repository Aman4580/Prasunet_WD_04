import React from 'react'

const Nav = () => {
  return (
        <div id="header">
        <div class="container">
         <nav>
                <h3 class="logo"><span>A</span>man</h3>
                <ul id ="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>

                    
                <i class="fa-sharp fa-solid fa-circle-xmark" onclick="closemenu()"></i>
                </ul>
                <i class="fa-solid fa-bars" onclick="openmenu()"></i>
              </nav>
            <div class="header-text">
             <h1>Hi, I'm <span>Aman Verma</span><br/> from Lucknow</h1>
             <p className='adarsh'>Full Stack Developer</p>
            </div>
        </div>
        </div>
  )
}

export default Nav;
