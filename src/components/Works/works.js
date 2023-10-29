import React from 'react';
import './works.css';
import portfolio1 from '../../assests/Images/portfolio1.jpeg';
import portfolio2 from '../../assests/Images/portfolio2.jpeg';
import portfolio3 from '../../assests/Images/portfolio3.jpeg';
import portfolio4 from '../../assests/Images/portfolio4.jpeg';
import portfolio5 from '../../assests/Images/portfolio5.jpeg';
import portfolio6 from '../../assests/Images/portfolio6.jpeg';




const Works = () => {
  return (
    <section id="works">
        <h2 className="workstitle">My Projects</h2>
        <span className='worksDesc'>Unwavering computer enthusiast with a relentless drive for learning, problem-solving, and innovation. I actively engage in the tech community while maintaining a pioneering spirit, seeking to  contribute to the ever-evolving world of computing</span>
        <div className="worksImgs">
          <div className='containerImg'>
            <img src={portfolio1} alt="" className="worksImg" />
            <h1 className='containerImgText'>FAKE NEWS DETECTION</h1>
            <p>python</p>
       
            </div>
          
            <div className='containerImg'>
            <img src={portfolio2} alt="" className="worksImg" />
            <h1 className='containerImgText'>Voice Your Inbox</h1>
            <p>python</p>
            </div>
            <div className='containerImg'>
            <img src={portfolio3} alt="" className="worksImg" />
            <h1 className='containerImgText'>Car Theft Detection</h1>
            <p>python</p>
            </div>
       
            <div className='containerImg'>
            <img src={portfolio4} alt="" className="worksImg" />
            <h1 className='containerImgText'>Working on CRUD</h1>
            <p>React</p>
            </div> <div className='containerImg'>
            <img src={portfolio5} alt="" className="worksImg" />
            <h1 className='containerImgText'>Working on ML</h1>
            <p>ML based project</p>
            </div> <div className='containerImg'>
            <img src={portfolio6} alt="" className="worksImg" />
            <h1 className='containerImgText'>IDEATION PHASE</h1>
            <p>Ideation</p>
            </div>
        </div>
       

      
    </section>
  )
}

export default Works;
