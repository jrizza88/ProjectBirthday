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

import "./Info.scss"
import vpn from "../../images/vpn.png"
import passwordImage from "../../images/passwordManager3.jpg"
import jamarDev from "../../images/jamarDev.png"

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
  cardContent: {
    textAlign: 'left',
    borderTop: '1px solid black'
  },
  details: {
    fontSize: '1.3rem',
    color: 'black'
  },
  reasons: {
    fontSize: '1rem',
    color: 'black',
    paddingLeft: '20'
  },
  optionsPassword: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
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
    const [open1, setOpen1] = React.useState(false);
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

  return (
    <div className={classes.root}>
    <div className="infoSection">
            <h1>Protect yourself on the Internet</h1>
            <img className="infoImage" src={jamarDev} alt="jamarthedev" />
            <div className="infoContent">The internet is one of my favorite places. You can do just about anything, and it even helped to keep most of us entertained (hopefully continues to do so) during the COVID-19 pandemic.
            We live our everyday lives through the use of the internet. From checking out bank accounts, paying online bills, keeping us posted on your latest updates on Twitter, or logging online to do your job. 
            Everyday, we may be putting ourselves at a security risk in a time when we cannot afford to let up. There are a ton of resources out there, but today you are going to learn about why every single one of us should have 
            a password manager and a VPN. 
            <br/>
            <br/>
            If you already have both, congrats! I hope you educate and let others know about why your friends, families, and coworkers should also be in on this.
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
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Password Managers
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Let me guess, before you visited this site, you just finished logging in with one of 1 to 4 passwords that you use for all your logins? 
            If so, you are playing a dangerous game. It's only a matter of time before a hacker out there cracks one of your passwords and gains access to your bank or credit cards. 
            From there, you might even be a victim of some sort of form of identity theft. 
            <br/>
            <br/>
            This is exactly why you should have a password manager! Click below to learn more.
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
            <h2 id="spring-modal-title">Password Managers</h2>
            <p className={classes.details} id="spring-modal-description">Let me reiterate something - get a password manager ASAP!
            Here are a few simple reasons why it's worth it: 
            <br/> <br/>
            <li className={classes.reasons}>You only need to remember one password. The password manager will take care of every single login.</li>
            <li className={classes.reasons}>Your passwords are too simple, the password manager can take care of that.</li>
            <li className={classes.reasons}>Numbers don't lie - the less passwords you have for everything, the more likely you are to get hacked.</li>
            <li className={classes.reasons}>The passwords can be synced across all devices you use.</li>
            <li className={classes.reasons}>It's the wise thing to do. Now check out some options below.</li>
            <br/>
            I personally use 1password, but Last Pass is a good free option, and Keeper Security was rated the best option by PC Mag.
            </p>
            <div className={classes.optionsPassword}>
              <Button size="small" color="secondary" href="https://1password.com/">
                  1Password
                </Button>
                <Button size="small" color="primary" href="https://www.lastpass.com/">
                  Last Pass
                </Button>
                <Button size="small" href="https://www.keepersecurity.com/">
                  Keeper Security
                </Button>
              </div>
          </div>
        </Fade>
      </Modal>
        <Button size="small" color="primary" href="https://www.howtogeek.com/141500/why-you-should-use-a-password-manager-and-how-to-get-started/">
          More Info
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
          image={vpn}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            VPNs
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            VPNs stand for Virtual Private Networks. In short, a VPN is a group of
            computers (or networks) networked together over a public network (aka the internet).
            There are many uses of VPNs, but the most important use is to have it for securing and encrypting your communications when you're using an untrusted public network.
            <br/>
            <br/>
            Does this still sound confusing?! Click below to learn more, or More Info to read an article on this.
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
            <h2 id="spring-modal-title">VPNs</h2>
            <p className={classes.details} id="spring-modal-description">VPNs have become necessary for even the average user. See why:
            Here are a few simple reasons why it's worth it: 
            <br/> <br/>
            <li className={classes.reasons}>Secure Messaging - Not all messaging tools (like WhatsApp) are encrypted. A VPN helps to provide a layer of security.</li>
            <li className={classes.reasons}>Secure public Wi-Fi - Probably the most important reason to have a VPN. A good VPN can protect you from phishing scams via fake Wi-Fi connections, and being hacked or infected with malware.</li>
            <li className={classes.reasons}>Location-based price targeting - beat the airlines or retailers by changing your location via your VPN, you'll sometimes find better deals. Thank me later.</li>
            <li className={classes.reasons}>Avoiding Gov't Censorship - Because you never know if you'll end up having trying to access a censored website due to  an oppressive regime</li>
            <li className={classes.reasons}>Online Gaming - Because you might be able to connect to faster connection speeds or overcome geo-blocking restrictions ;) </li>
            <br/>
            I personally use PIA (Private Internet Access), TunnelBear is perfect for first-time users, and Mullvad VPN is the best for bargain hunters.
            </p>
            <div className={classes.optionsPassword}>
              <Button size="small" color="secondary" href="https://www.privateinternetaccess.com/">
                  PIA
                </Button>
                <Button size="small" color="primary" href="https://www.tunnelbear.com/b/vpn-yearly">
                  Tunnel Bear
                </Button>
                <Button size="small" href="https://mullvad.net/en/">
                  Mullvad VPN
                </Button>
              </div>
          </div>
        </Fade>
      </Modal>
        <Button size="small" color="primary" href="https://www.pcmag.com/news/what-is-a-vpn-and-why-you-need-one">
          More Info
        </Button>
      </CardActions>
    </Card>
      </Grid>
              
    </Grid>
 

    
    </div>
    
  );
}
