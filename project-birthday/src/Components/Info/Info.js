import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from "@material-ui/core/Grid";
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

import fortune from "../../images/fortune.jpeg"
import passwordImage from "../../images/passwordManager3.jpg"
// //import passwordImage from "../../images/lavender-background.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    background: "#231f20",
    color: "white",
    padding: "2.5rem",
    // padding: 25px 75px 0 75px;
    marginTop: "2rem",
    border: "7px solid #ffffff",
    width: "100%",
    height: "100%",
  },
  grid: {
    paddingBottom: 20,
    // width: '100%'
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
subRoot: {
    // height: "100%",
    // display: "flex",
    // flexDirection: "column",
    margin: 5,
    maxWidth: 600,
    // margin: '10px'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};



export default function Info() {
  const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div className={classes.root}>
    <div className="donationInfoSection">
            <h1>Protect yourself on the Internet</h1>
            <div className="info">Charmander pokeball team rocket char pikachu jiggly puff 
                pokedex i choose you sycther gameboy colour battle onyx i choose you trainer gameboy colour pokedex thunderbolt i choose
                you sycther gameboy colour mew jiggly puff pikachu onyx pokedex pikachu trainer abra ash mew gameboy colour a wild bulbasaur
                mew-two meaowth charmander pikachu growlith team rocket mew-two. Bulbasaur pokedex ash gym battle jiggly puff blasting
                of again onyx bulbasaur professor rowan a wild growlith trainer team rocket team rocket abra squirtle jiggly puff growlith
                ash pokedex a wild pokeball mew-two thunderbolt thunderbolt i choose you growlith jiggly puff abra pokedex ace trainer 
               pokeball pikachu blasting of again thunderbolt charmander battle gym battle gym battle squirtle.
            </div>
        </div>

<Grid container spacing={3}>
    <Grid xs={12} sm={6} md={6} className={classes.grid}>
    <Card className={classes.subRoot}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="Contemplative Reptile"
          height="240"
          image={passwordImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Spring modal</h2>
            <p id="spring-modal-description">react-spring animates me.</p>
          </div>
        </Fade>
      </Modal>
        <Button size="small" color="primary">
          Donate
        </Button>
      </CardActions>
    </Card>
      </Grid>

     {/* CARD TWO */}

     <Grid xs={12} sm={6} md={6} className={classes.grid}>
     <Card className={classes.subRoot}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="Contemplative Reptile"
          height="240"
          image={passwordImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Spring modal</h2>
            <p id="spring-modal-description">react-spring animates me.</p>
          </div>
        </Fade>
      </Modal>
        <Button size="small" color="primary">
          Donate
        </Button>
      </CardActions>
    </Card>
      </Grid>
              
    </Grid>
 

    
    </div>
    
  );
}




// import React, {useState} from 'react';
// import Slider from 'react-animated-slider';
// import horizontalCss from 'react-animated-slider/build/horizontal.css';
// import "./Info.scss";
// import passwordImage from "../../images/passwordManager3.jpg"
// //import passwordImage from "../../images/lavender-background.jpg"
// import okra from "../../images/okra2.png"

// const Info = () => {
//     const content = [
//         { image: passwordImage, title: '1Password', description: 'Lorem ipsum', button: '1password', link: "https://1password.com/"},
//         { image: okra,title: 'Second item', description: 'Lorem ipsum', button: 'hey', link: "https://jamar.dev"}
//     ]
//     return (
//     <div className="infoContainer">
//         <h2>Info</h2>
//         <div>
    
//         Charmander pokeball team rocket char pikachu jiggly puff pokedex i choose you sycther gameboy colour battle onyx i choose you trainer gameboy colour pokedex thunderbolt i choose you sycther gameboy colour mew jiggly puff pikachu onyx pokedex pikachu trainer abra ash mew gameboy colour a wild bulbasaur mew-two meaowth charmander pikachu growlith team rocket mew-two. Bulbasaur pokedex ash gym battle jiggly puff blasting of again onyx bulbasaur professor rowan a wild growlith trainer team rocket team rocket abra squirtle jiggly puff growlith ash pokedex a wild pokeball mew-two thunderbolt thunderbolt i choose you growlith jiggly puff abra pokedex ace trainer pokeball pikachu blasting of again thunderbolt charmander battle gym battle gym battle squirtle.
//         </div>
  

// <Slider classNames={horizontalCss}>
// {content.map((item, index) => (
// 	<div
//         key={index}
//         style={{ background: `url('${item.image}') no-repeat center center`, width: '100%',  backgroundSize: "cover" }}
// 	>
// 		<div className="center">
// 			<h1>{item.title}</h1>
// 			<p>{item.description}</p>
// 			<a href={item.link}><button>{item.button}</button></a>
// 		</div>
// 	</div>
// ))}
// </Slider>
        

//     </div>
//     )
// }

// export default Info;