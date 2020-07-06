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
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support

import "./Donate.scss"
import jamar from "../../images/jamar_thumbs.png"
import road from "../../images/maketheroad.png"
import okra from "../../images/okra2.png"
import fortune from "../../images/fortunesociety2.png"
import vocal from "../../images/vocal.png"


const useStyles = makeStyles((theme) => ({
    subRoot: {
      maxWidth: 345,
      margin: '10px',
      
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'black',
        margin: '0 25px'
        // width: '85%'
        // display: 'none'
      },
      paper: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
      gridContainer: {
        [theme.breakpoints.down(650)]: {
        alignSelf: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        }
      },
      details: {
        fontSize: '1.5rem',
        color: 'black'
      },
      visitSiteButton: {
        display: 'flex',
        alignSelf: 'center',
        alignItems: 'center',
      },
      cardContent: {
        textAlign: 'left',
        borderTop: '1px solid black'
      }
      // grid: {
      //   margin: 'inherit'
      // }
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
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen1 = () => {
      setOpen1(true);
    };
  
    const handleClose1 = () => {
      setOpen1(false);
    };

    const handleOpen2 = () => {
      setOpen2(true);
    };
  
    const handleClose2 = () => {
      setOpen2(false);
    };

    const handleOpen3 = () => {
      setOpen3(true);
    };
  
    const handleClose3 = () => {
      setOpen3(false);
    };


    return (
    <div className="donateContainer">
        <div className="donationInfoSection">
            <h1>Donate to a cause</h1>
        
            <div className="info">
              <div className="miniInfo">I am tired. Most likely you are too.</div> <br/> This is why I choose to use that tiredness to turn it into creating another space to be heard. 
              I took the time to research and communicate with friends to find locally based organizations that support people that look like me and my loved ones in the communities that I live or spend time in. 
              Check out each one, click on "Learn More" to see more details, and donate to a worthwhile cause!
            </div>
            <img className="imageAvatar" src={jamar} alt="party" />
        </div>
        <div className="donationImageSection">

<Grid container className={classes.gridContainer} spacing={6}>
    <Grid xs={12} sm={6} md={6} className={classes.grid}>
    <Card className={classes.subRoot}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="The Road"
          height="140"
          image={road}
          title="The Road"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Make the Road
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A progressive grassroots immigrant-led organization in NY State. 
            Make the Road NY builds the power of immigrant and working class communities.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={handleOpen}>
        Learn More
      </Button>
      <Modal
        aria-labelledby="spring-modal-title-"
        aria-describedby="spring-modal-description-"
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
            <h2 id="spring-modal-title-">Make the Road</h2>
            <p className={classes.details} id="spring-modal-description-">Make the Road New York builds the power
                    of immigrant and working class communities. They integrate strategies of legal services, education, community organizing and policy innovation.
                    They accomplish real results, build coalitions, and publish results and success stories on their website. 
            </p>
            <Button size="small" className={classes.visitSiteButton} color="primary" href="https://maketheroadny.org/">
              Visit their site
            </Button>
          </div>
        </Fade>
      </Modal>
        <Button size="small" color="primary" href="https://connect.clickandpledge.com/w/Form/5505c6fb-990e-4f31-a67c-a3560e59fab3">
          Donate
        </Button>
      </CardActions>
    </Card>
    </Grid>

    <Grid xs={12} sm={6} md={6} className={classes.grid}>
    <Card className={classes.subRoot}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="Contemplative Reptile"
          height="140"
          image={okra}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            The Okra Project
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The Okra Project is a collective that seeks to address the global crisis that affects Black Trans Lives. Their focus is to provide support through meals and resources.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={handleOpen1}>
        Learn More
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open1}>
        <div className={classes.paper}>
            <h2 id="spring-modal-title">The Okra Project</h2>
            <p className={classes.details} id="spring-modal-description">The Okra Project is a very straightforward initiative. They seek donations to help support Black Trans People by providing delicious, nutritious, and culturally specific meals. Check out their website to learn more about the meaning  </p>
            <Button size="small" className={classes.visitSiteButton} color="primary" href="https://www.theokraproject.com/">
              Visit their site
            </Button>
          </div>
        </Fade>
      </Modal>
        <Button size="small" color="primary" href="https://www.artsbusinesscollaborative.org/asp-products/the-okra-project-sponsored-project/">
          Donate
        </Button>
      </CardActions>
    </Card>
    </Grid>
    
    <Grid xs={12} sm={6} md={6} className={classes.grid}>
    <Card className={classes.subRoot}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt="Contemplative Reptile"
          height="140"
          image={fortune}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            The Fortune Society
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The fortune society is a NYC based organization to provide support to formerly incarcerated people. Services include housing, job opportunities, adjusting to life after prison, and education.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={handleOpen2}>
        Learn More
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <div className={classes.paper}>
          <h2 id="spring-modal-title">The Fortune Society</h2>
            <p className={classes.details} id="spring-modal-description">The fortune society's mission helps to support individuals 
                in the New York City area to meet the challenges 
             and provide resources to help individuals re-enter society as we know it.
              Far too many ex-prisoners end up back in the prison system in a cycle that never seems to end.
              I believe in this organization's services and advocacy in helping to change lives for the better.  </p>
            <Button size="small" className={classes.visitSiteButton} color="primary" href="https://fortunesociety.org/">
              Visit their site
            </Button>
          </div>
        </Fade>
      </Modal>
        <Button size="small" color="primary" href="https://donate.fortunesociety.org/give/186379#!/donation/checkout">
          Donate
        </Button>
      </CardActions>
    </Card>
    </Grid>

      <Grid xs={12} sm={6} md={6} className={classes.grid}>
      <Card className={classes.subRoot}>
        <CardActionArea>
          <CardMedia
            component={"img"}
            alt="Contemplative Reptile"
            height="140"
            image={vocal}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Vocal - New York 
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Vocal New York is a grassroots membership organization that helps to empower low-income people impacted by HIV/AIDS, the drug war, mass incarceration, and homelessness.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button size="small" color="primary" onClick={handleOpen3}>
          Learn More
        </Button>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          className={classes.modal}
          open={open3}
          onClose={handleClose3}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open3}>
            <div className={classes.paper}>
            <h2 id="spring-modal-title">Vocal - New York</h2>
              <p className={classes.details} id="spring-modal-description">Vocal NY supports five different main issues affecting low-income communities throughout New York. 
              They have been around since 1999, and have built up the strength to combat homelessness, ending mass incarceratation, AIDS, the drug war, and fighting for our democracy.
              Their movement model is based off of traditional organizing, activism, and black-led social movements to fight for racial justice. </p>
              <Button size="small" color="primary" href="https://www.vocal-ny.org/">
                Visit their site
              </Button>
            </div>
          </Fade>
        </Modal>
          <Button size="small" color="primary" href="https://vocal.ourpowerbase.net/civicrm/contribute/transact?id=6">
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
