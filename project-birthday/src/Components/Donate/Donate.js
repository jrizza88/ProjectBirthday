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

import "./Donate.scss"
import jamar from "../../images/jamar_thumbs.png"
import change from "../../images/change.png"
//import fortune from "../../images/fortunesociety.png"
import fortune from "../../images/fortune.jpeg"
import nysylc from "../../images/nysylc3.jpeg"
import okra from "../../images/okra2.png"

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      margin: '10px'
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
  

export default function Donate() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
    <div className="donateContainer">
        <div className="donationInfoSection">
            <h1>Donate to a cause</h1>
        
            <div className="info">Please donate to one of four causes
                 that are near and dear to my heart. 
                These donations go to a local based organization that is in complete support of the movements, ranging from ....
                Org 1 supports the Black Lives Matter movement, Org 2 supports the Latinx in that, Org 3 supports Mental Health Endeavour, 
                and Org 4 supports formely incarcerated men who are in need of mental health services to get their feet off the ground. 
            </div>
            <img className="imageAvatar" src={jamar} alt="party" />
        </div>
        <div className="donationImageSection">

<Grid container spacing={6}>
    <Grid xs={12} sm={6} md={6} className={classes.grid}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="Contemplative Reptile"
          height="140"
          image={fortune}
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

    <Grid xs={12} sm={6} md={6} className={classes.grid}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="Contemplative Reptile"
          height="140"
          image={fortune}
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
    
    <Grid xs={12} sm={6} md={6} className={classes.grid}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="Contemplative Reptile"
          height="140"
          image={fortune}
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

    <Grid xs={12} sm={6} md={6} className={classes.grid}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="Contemplative Reptile"
          height="140"
          image={fortune}
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

    </div>
    )
}


// const cause1 = {
//     backgroundImage: 'url(' + change + ')',
//     maxWidth:'100%',
//     maxHeight:'100%',
//     borderRadius: '10% 0 0 0 ',
//     // marginTop: '37.5px'
// }

// const cause2 = {
// backgroundImage: 'url(' + nysylc + ')',
// maxWidth:'100%',
// maxHeight:'100%',
// borderRadius: '0 10% 0 0 ',
// // marginTop: '37.5px'
// }

// // const cause3 = {
// // backgroundImage: 'url(' + fortune + ')',
// // maxWidth:'100%',
// // maxHeight:'100%',
// // borderRadius: '0 0 0 10% '
// // }

// const cause4 = {
// backgroundImage: 'url(' + okra + ')',
// borderRadius: '0 0 10% 0 ',
// maxWidth:'100%',
// maxHeight:'100%',
// objectFit: 'cover',
// // paddingRight: '30px',
// // paddingBottom: '199px',
// color: 'black'
// }

           {/* <ul className="imageNav">
                 <li className="tabNav"><a href="https://secure.actblue.com/contribute/page/support-us"><section className="title2">Color of Change</section><span className="imgHolder" style={cause1}></span></a></li>
                <li className="tabNav"><a href="https://www.nysylc.org/donate"><section className="title2"> NYSYLC </section><span className="imgHolder" style={cause2}></span></a></li>
                <li className="tabNav"><a href="https://fortunesociety.org/ways-to-give/"><span className="imgHolder" style={cause3}></span><section className="title2">The Fortune Society</section></a></li>
                <li className="tabNav"><a href="https://www.theokraproject.com/"><span className="imgHolder" style={cause4}></span><section className="title2">The Okra Project</section></a></li> 
            </ul> */}