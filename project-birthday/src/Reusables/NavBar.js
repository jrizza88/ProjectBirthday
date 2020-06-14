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
    to="/" 
    spy={true}
    smooth={true}    
    offset={-70}
    duration={500}
    >Project Birthday </Link>

    <Link activeClass="active" 
    to="donateDiv"    
    spy={true}
    smooth={true}    
    offset={-70}
    duration={800}>Donate</Link>

    <Link activeClass="active" 
    to="eventsDiv"    
    spy={true}
    smooth={true}    
    offset={-70}
    duration={800}>Celebration</Link>
  </div>
  )
  }

export default Navbar;