import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.scss";
import birthday from "../images/birthday.png"

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Navbar = ({ visible }) => {
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  return (
  <div className="navbar">
      <Link activeClass="active" 
      className="navhome"
      to="App" 
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