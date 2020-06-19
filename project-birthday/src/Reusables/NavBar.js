import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.scss";


const Navbar = ({ visible }) => {
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  return (
  <div className="navbar">
      <Link activeClass="active" 
      className="navhome"
      to="container" 
      spy={true}
      smooth={true}    
      offset={-70}
      duration={500}
      >Project Birthday 
      </Link>
    <div className="bar">

      <Link activeClass="active" 
      className="navitem"
      to="donateDiv"    
      spy={true}
      smooth={true}    
      offset={-70}
      duration={800}>Donate</Link>

      <Link activeClass="active" 
      className="navitem"
      to="eventsDiv"    
      spy={true}
      smooth={true}    
      offset={-70}
      duration={800}>Info
      </Link>
      <Link activeClass="active" 
      className="navitem"
      to="eventsDiv"    
      spy={true}
      smooth={true}    
      offset={-70}
      duration={800}>Celebration
      </Link>
    </div>
  </div>
  )
  }

export default Navbar;