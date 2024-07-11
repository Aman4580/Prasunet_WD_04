import React from 'react'
import Work1 from './images/Work1.png'
import Work2 from './images/Work2.png'
import Work3 from './images/Work1.png'
import { LuArrowUpRightSquare } from "react-icons/lu";


const Portfolio = () => {
  return (
    <div id="portfolio">
    <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
            <div className="work">
                <img src={Work1} alt='error'/>
                <div className="layer">
                    <h3>Plant Selling Api</h3>
                    <p>Implemented efficient cart functionality, enabling users to add, remove, and modify items seamlessly and to
                    enhance user experience.</p>
                    <a href="https://github.com/Aman4580/Plant_Selling_Api"><LuArrowUpRightSquare /></a>
                </div>
            </div>
            <div className="work">
                <img src={Work2} alt='789'/>
                <div className="layer">
                    <h3>Blog Web Application </h3>
                    <p>Users can create, edit, and delete, like, comment in their blog posts, simplifying the user interface for managing content 
                    effectively.</p>
                    <a href="https://github.com/Aman4580/Blog_Application"><LuArrowUpRightSquare /></a>
                </div>
            </div>
            <div className="work">
                <img src={Work3} alt='896'/>
                <div className="layer">
                    <h3>Web_Chat</h3>
                    <p>This snake game is looking good and full of enjoy and easy to play this game</p>
                    <a href="https://github.com/Aman4580/Web_Chat"><LuArrowUpRightSquare/></a>
                </div>
            </div>
        </div>
        <a href="https://github.com/Aman4580" className="btn">See More</a>
    </div>
</div>
  )
}


export  default Portfolio;
