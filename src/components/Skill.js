import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";


 const Skill = () => {
  return (
    <div>
        <ul><li><span>Full Stack Developer</span>
        <br/>Frontend: HTML,CSS,TailwindCSS,Javascript,React.js</li>
         Backend: Node.js,Express.js,MongoDB,Postman,SQL,Mongoose,J.query,GraphQl.
        <li>C & C++,Javascript Programming Language</li>
        <li>Data Structure And Algorithm in C&C++</li>
        <li><span>Problem Solver</span>: Leetcode,Codechef,GFG</li>
        <span>
        <a href="https://leetcode.com/u/amanverma124580/"><SiLeetcode className='prob-size'/></a>
        <a href="https://www.geeksforgeeks.org/user/amanverma7124/"><SiCodechef className='prob-size'/></a>
        <a href="https://www.codechef.com/users/amanverma2003"><SiGeeksforgeeks className='prob-size'/></a>
        </span>
        </ul>
    </div>
  )
}
export default Skill;
