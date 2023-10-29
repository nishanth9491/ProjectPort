import React,{ useEffect } from 'react';
import './skills.css';

import WebDevelop from '../../assests/Images/web.png';
import DSA from '../../assests/Images/DSA.webp';
import ML from '../../assests/Images/machinelearning.png';


  


const Skills = () => {
    

  return (
   <section id='skills'>
    <span className="skillTitle">What I do</span>
    <span className="skillDesc">I am profoundly passionate about software development, where each line of code becomes a brushstroke on the canvas of innovation, allowing me to craft solutions and bring digital dreams to life.</span>

   <div className="skillBars">
    <div className="skillBar">
        <img src={WebDevelop} alt="" className="skillBarImg " />
        <div className="skillBarText">
            <h2>Web Developer</h2>
            <p>Being a passionate React.js developer is just a delightful walk in the park, effortlessly juggling all the skills it demands, right? </p>
        </div>
    </div>
    <div className="skillBar">
        <img src={DSA} alt="" className="skillBarImg " />
        <div className="skillBarText">
            <h2>DSA Problem solver</h2>
            <p>I am truly passionate about solving DSA problems, and I'm dedicated to continually improving my skills and knowledge in this field.</p>
        </div>
    </div>
    <div className="skillBar">
        <img src={ML} alt="" className="skillBarImg " />
        <div className="skillBarText">
            <h2>Machine learning</h2>
            <p>Learning that takes of YOLO in the web. But, had a Neural network to store it.</p>        </div>
    </div>

   </div>
 

   </section>
  )
}

export default Skills
