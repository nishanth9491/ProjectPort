import React from 'react';
import './intro.css';
import btnImg from '../../assests/Images/hireme.png';
import {Link} from 'react-scroll';




const Intro=()=> {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='Hello'>Hello,</span>
            <span className='Introtext'>I'm <span className="introName" >Nishanth</span>  <br />
            Software Developer</span>
            <p className="introPara">Likes to Talk in <br />Js,ReactJs,Java,python,Git....</p>
            <Link><button className="btn"><img src={btnImg} alt="" className='btnImg' />Hire me</button></Link>
        </div>
       
    </section>
  )
}

export default Intro;