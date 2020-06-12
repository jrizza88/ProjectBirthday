import React from 'react';
import "./NavBar.css";

const Navbar = ({ visible }) => (
    <div id="navbar" className={visible ? 'slideIn' : 'slideOut'}>
      Hello
    </div>
  )

export default Navbar;