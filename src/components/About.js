import React, { useState } from 'react';
import aman_final_image from './images/aman_final_image.jpeg'
import Skill from './Skill';
import Exp from './Exp';
import Edu from './Edu';

const About = () => {
  const [tabContents, setTabContents] = useState(<Skill />);

  const opentab = (e) => {
    if (e === 1) {
      setTabContents(<Skill />);
    } else if (e === 2) {
      setTabContents(<Exp/>);
    } else {
      setTabContents(<Edu/>);
    }
  };

  return (
    <div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src={aman_final_image} alt="@" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p>My name is Aman Verma. I am from Lucknow. Currently, I am pursuing B.tech from Ajay Kumar Garg Engineering College Ghaziabad, Uttar Pradesh. My branch is Computer Science and Engineering. My hobbies include seeing historical movies and playing cricket.</p>
              <div className="tab-titles">
                <button className="tab-links active-link" onClick={() => opentab(1)}>Skills</button>
                <button className="tab-links" onClick={() => opentab(2)}>Experience</button>
                <button className="tab-links" onClick={() => opentab(3)}>Education</button>
              </div>
              <div id="tab-contents">
                {tabContents}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
