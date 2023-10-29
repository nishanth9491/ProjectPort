import React from 'react';
import { Link } from 'react-scroll';
import './sidecar.css';

const Sidecar = () => {
  return (
    <div class="container">
<Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={250} className="dot"></Link>

    <div class="line"></div>
    <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-100} duration={250} className="dot"  ></Link>

    <div class="line"></div>
    <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-100} duration={250} className="dot"  ></Link>
    <div class="line"></div>
    <Link activeClass='active' to ='contactPage' spy={true} smooth={true} offset={-100} duration={250} className="dot"  ></Link>
  </div>
  )
}

export default Sidecar;
