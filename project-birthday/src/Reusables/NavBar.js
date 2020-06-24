import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.scss";
import birthday from "../images/birthday.png"

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
      ><img src={birthday} alt="bday"/>
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
      to="infoDiv"    
      spy={true}
      smooth={true}    
      offset={-70}
      duration={800}>Learn
      </Link>

      <Link activeClass="active" 
      className="navitem"
      to="eventsDiv"    
      spy={true}
      smooth={true}    
      offset={-70}
      duration={800}>Celebrate
      </Link>
    </div>
  </div>
  )
  }

export default Navbar;