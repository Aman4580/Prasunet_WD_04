import React from 'react'

const Servise = () => {
  return (
    <div id="services">
    <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
   <div>
    <i className="fa-solid fa-code"></i>
    <h2>Full Stack Developer</h2>
    <p>
    As a Full Stack Developer, I have hands-on experience in both frontend and backend technologies. I am proficient in frameworks like React.js and Node.js, skilled in database management, API integration, and delivering comprehensive web applications for optimal user experience.</p>
    {/* <a href="#">Learn More</a> */}
   </div>
   <div>
    <i className="fa-regular fa-crop"></i>
    <h2>Content Writer</h2>
    <p>I contribute valuable content to Geeks for Geeks, focusing on web technologies. My articles aim to simplify intricate concepts, offering readers practical guidance and deep insights into the latest trends and techniques in the field.</p>
    {/* <a href="#">Learn More</a> */}
   </div>
   <div>
    <i className="fa-brands fa-app-store"></i>
    <h2>Problem Solver</h2>
    <p>
    I specialize in problem-solving domains such as Data Structures and Algorithms (DSA), reasoning, and Dynamic Programming (DP). My expertise includes developing efficient solutions, applying logical reasoning, and optimizing algorithms to solve intricate problems effectively.</p>
    {/* <a href="#">Learn More</a> */}
   </div>
        </div>
    </div>
</div>
  )
}

export  default Servise;
