import React from 'react';
//import { Link, animateScroll as scroll } from "react-scroll";
import {Link} from "react-scroll";
import { NavLink } from "react-router-dom";
// import Link from '@material-ui/core/Link';
import "./NavBar.scss";
import birthday from "../images/birthday.png"

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    position: "static",
    background: "lavender",
    color: "#fff",
    textDecoration: "none",
    cursor: 'click'
  },
  breakpoints: {
    values: {
      sm: 654
    }
  },
  sideNav: {
    background: "lavender"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mainTitle: {
    flexGrow: 1,
    fontSize: 24,
    color: "#fff"
  },
  title: {
    flexGrow: 1,
    fontSize: 16,
    color: "#fff"
  },
  titleMobile: {
    flexGrow: 1,
    fontSize: 16,
    color: "black"
  },
  // a: {
  //   textDecoration: "none",
  //   cursor: 'click'
  // },
  toolbar: {
    [theme.breakpoints.down(656)]: {
      display: "none"
    }
  },
  toolbarMobile: {
    // justifyContent: "space-evenly",
    display: "none",
    [theme.breakpoints.down(656)]: {
      display: "flex",
      justifyContent: "space-between",
      background: "lavender",
      color: "black"
    },
    fontSize: 16
  },
  mobileMenu: {
    width: 200,
    fontSize: 16
  },
  imageMobile: {
    display: "flex"
  },
  // listItemRoot: {
  //   width: 100%;
  //   display: flex;
  //   position: relative;
  //   flex-direction: column;
  //   box-sizing: border-box;
  //   text-align: left;
  //   /* align-items: center; */
  //   align-self: center;
  //   /* background: lavender; */
  //   padding-top: 8px;
  //   padding-bottom: 8px;
  //   justify-content: flex-start;
  //   text-decoration: none;
  // },
  navItemM: {   
      // background: "none",
      border: "none",
      width: "100%",
      flexDirection: "column",
      alignSelf: "center",
      cursor: "pointer",
      padding: '1em 1em',
      letterSpacing: '0.05rem',
      fontWeight: 'bold',
      transition: '0.4s',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      '&:hover': {
        background: 'lavender',
     },
  }
}));
//const Navbar = ({ visible }) => {
const Navbar = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  // const { classes } = props;

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  // scrollToTop = () => {
  //   scroll.scrollToTop();
  };
  return (
  <div>
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
   {/* Mobile view! */}
   <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
      
          <Toolbar className={classes.toolbarMobile}>
          <Typography variant="h6" className={classes.mainTitle}>
          <Link activeClass="active" 
              className="navhome"
              to="App" 
              spy={true}
              smooth={true}    
              offset={-70}
              duration={500}
              ><img className={classes.imageMobile} src={birthday} alt="bday"/>
      </Link>
          </Typography>
          <IconButton className={classes.menuButton} edge="start"  color="inherit" aria-label="menu" onClick={toggleDrawer("right", true)}>
                    <MenuIcon />
          </IconButton>
            <Drawer open={state.right} onClose={toggleDrawer("right", false)} onClick={preventDefault}  >
              <List className={classes.mobileMenu}>
                {/* <ListItem><NavLink to="/About" component={About} className={classes.a}><Button className={classes.titleMobile}>About</Button></NavLink></ListItem>
                <ListItem><NavLink to="/Projects" component={Projects} className={classes.a}><Button color="inherit" className={classes.titleMobile}>Projects</Button></NavLink></ListItem>
                <ListItem><NavLink to="/Contact" component={Contact} className={classes.a}><Button color="inherit" className={classes.titleMobile}>Contact</Button></NavLink></ListItem> */}
          <ListItem >
            <Link activeClass="active" 
                className={classes.navItemM}
                to="donateDiv"    
                spy={true}
                smooth={true}    
                offset={-70}
                duration={800}>Donate</Link>
            </ListItem>

            <ListItem >
                <Link activeClass="active" 
                className={classes.navItemM}
                to="infoDiv"
                spy={true}
                smooth={true}    
                offset={-70}
                duration={800}>Learn
                </Link>
            </ListItem>
             
              <ListItem >
                  <Link activeClass="active" 
                  className={classes.navItemM}
                  to="eventsDiv"
                  // onClick={preventDefault}  
                  spy={true}
                  smooth={true}    
                  offset={-70}
                  duration={800}><NavLink to="eventsDiv">Celebrate</NavLink>
                  </Link>
                  
                </ListItem>
            
                        </List>
                      </Drawer>
                    </Toolbar>
                  </AppBar>
      </div>


  </div>
  )
  }

export default Navbar;