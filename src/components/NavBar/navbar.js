import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assests/Images/logo.jpeg';
import contactImg from '../../assests/Images/contact.png';
import menu from '../../assests/Images/menu.png';
// import btnImge from '../../assests/Images/hireme.png';
import {Link} from 'react-scroll';

const Navbar=()=> {

  const [showMenu,setShowMenu]=useState(false);




  return (
    <nav class='navbar'>
      <img className='logo' src={logo} alt="" style={{width:"5rem"}} />
      
      <div className='navcenter'>
    

      
          <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className="navitems"  >Home</Link>
          <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-100} duration={500} className="navitems" >About</Link>
          <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-100} duration={500} className="navitems" >Portofolio</Link>
          <Link activeClass='active' to ='contactPage' spy={true} smooth={true} offset={-100} duration={500} className="navitems">Contact</Link>
          
      
      </div>
     
      <img className='mobMenu' src={menu} alt="Menu" style={{width:"5rem"}}  onClick={()=>setShowMenu(!showMenu)}/>
      

      <div className='navMenu' style={{display:showMenu?'flex':'none'} }>
    

      
          <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem"  onClick={()=>setShowMenu(false)}  >Home</Link>
          <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portofolio</Link>
          <Link activeClass='active' to ='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Contact</Link>

          
      
      </div>  
    
      <button class="navcontact " onClick={()=>{
        document.getElementById('contactPage').scrollIntoView({behavior:"smooth" });
      }}>
       <img src={contactImg} class="navbarcontactimg" alt="" />
       Contact Me

      </button>
       
    </nav>
  )
}

export default Navbar;