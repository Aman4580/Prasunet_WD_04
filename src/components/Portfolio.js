import React from 'react'
import Work1 from '../components/Work1.png'
import Work2 from '../components/Work2.png'
import Work3 from '../components/Work2.png'
import { LuArrowUpRightSquare } from "react-icons/lu";


const Portfolio = () => {
  return (
    <div id="portfolio">
    <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
            <div className="work">
                <img src={Work1} />
                <div className="layer">
                    <h3>Snake Game</h3>
                    <p>This snake game is looking good and full of enjoy and easy to play this game</p>
                    <a href="#"><LuArrowUpRightSquare /></a>
                </div>
            </div>
            <div className="work">
                <img src={Work2} />
                <div className="layer">
                    <h3>Netflix Clone</h3>
                    <p>This snake game is looking good and full of enjoy and easy to play this game</p>
                    <a href="https://portfolio-amanverma-1245.netlify.app"><LuArrowUpRightSquare /></a>
                </div>
            </div>
            <div className="work">
                <img src={Work3} />
                <div className="layer">
                    <h3>Calculator</h3>
                    <p>This snake game is looking good and full of enjoy and easy to play this game</p>
                    <a href="#"><LuArrowUpRightSquare/></a>
                </div>
            </div>
        </div>
        <a href="#" className="btn">See More</a>
    </div>
</div>
  )
}


export  default Portfolio;
