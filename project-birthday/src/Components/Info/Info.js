import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from "@material-ui/core/Grid";
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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
    paddingBottom: 20
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
subRoot: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    margin: 10
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  expandTwo: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpenTwo: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Info() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [expandedTwo, setExpandedTwo] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandClickTwo = () => {
    setExpandedTwo(!expandedTwo);
  };

  return (
    <div className={classes.root}>
    <div className="donationInfoSection">
            <h1>Donate</h1>
            <div className="info">Charmander pokeball team rocket char pikachu jiggly puff 
                pokedex i choose you sycther gameboy colour battle onyx i choose you trainer gameboy colour pokedex thunderbolt i choose
                you sycther gameboy colour mew jiggly puff pikachu onyx pokedex pikachu trainer abra ash mew gameboy colour a wild bulbasaur
                mew-two meaowth charmander pikachu growlith team rocket mew-two. Bulbasaur pokedex ash gym battle jiggly puff blasting
                of again onyx bulbasaur professor rowan a wild growlith trainer team rocket team rocket abra squirtle jiggly puff growlith
                ash pokedex a wild pokeball mew-two thunderbolt thunderbolt i choose you growlith jiggly puff abra pokedex ace trainer 
               pokeball pikachu blasting of again thunderbolt charmander battle gym battle gym battle squirtle.
            </div>
        </div>

<Grid container spacing={6}>
    <Grid xs={12} sm={6} md={6} className={classes.grid}>
    <Card className={classes.subRoot}>

    

    {/* <Grid container spacing={2}   direction="row"
  justify="space-evenly"
  alignItems="center"> */}

    {/* <Grid item xs={12} sm={6} md={4}> */}
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={passwordImage}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
      </Grid>

     {/* CARD TWO */}

     <Grid xs={12} sm={6} md={6} className={classes.grid}>
    <Card className={classes.subRoot}>

    

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={passwordImage}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expandTwo, {
            [classes.expandOpenTwo]: expandedTwo,
          })}
          onClick={handleExpandClickTwo}
          aria-expanded={expandedTwo}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expandedTwo} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
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