import React, { Component } from 'react';
import './subwork.css';

export default class Subwork extends Component {
    constructor(props)
    {
        super(props);
      
            this.state={
                isVisible:false,
            };

    }
   toggleVisibility=()=>{
    this.setState((prevState)=>({isVisible:!prevState.isVisible}));
    if(this.state.isVisible)
    {
      document.querySelector('.subworkBtn').innerHTML="See More";


   
    }
    else{
        var element=document.querySelector('.transition-element');
        element.classList.remove('visible');
        document.querySelector('.subworkBtn').innerHTML="See Less";
        document.querySelector('.subworkBtn').style.position="relative";
        document.querySelector('.subworkBtn').style.top="1rem";




    }

   }
  render() {
    return (
      <div className='subwork'>        
         <div className={`transition-element ${this.state.isVisible ? 'visible' : ''}`}>Working on  new Projects <br /> <p>Loading soon ...</p></div>
         <button className='subworkBtn' onClick={this.toggleVisibility}>See More</button>
        
      </div>
    )
  }
}


