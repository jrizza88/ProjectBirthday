import React, {useState} from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import "./Info.scss";
// import passwordImage from "../../images/passwordManager3.jpg"
import passwordImage from "../../images/lavender-background.jpg"
const Info = () => {
    const content = [
        { image: passwordImage, title: '1Password', description: 'Lorem ipsum', button: '1password', link: "https://1password.com/"},
        { title: 'Second item', description: 'Lorem ipsum', button: 'hey', link: "https://jamar.dev"}
    ]
    return (
    <div className="infoContainer">
        <h2>Info</h2>
        <div>
    
        Charmander pokeball team rocket char pikachu jiggly puff pokedex i choose you sycther gameboy colour battle onyx i choose you trainer gameboy colour pokedex thunderbolt i choose you sycther gameboy colour mew jiggly puff pikachu onyx pokedex pikachu trainer abra ash mew gameboy colour a wild bulbasaur mew-two meaowth charmander pikachu growlith team rocket mew-two. Bulbasaur pokedex ash gym battle jiggly puff blasting of again onyx bulbasaur professor rowan a wild growlith trainer team rocket team rocket abra squirtle jiggly puff growlith ash pokedex a wild pokeball mew-two thunderbolt thunderbolt i choose you growlith jiggly puff abra pokedex ace trainer pokeball pikachu blasting of again thunderbolt charmander battle gym battle gym battle squirtle.
        </div>
  

<Slider classNames={horizontalCss}>
{content.map((item, index) => (
	<div
        key={index}
        style={{ background: `url('${item.image}') no-repeat center center`, width: '100%',  backgroundSize: "cover" }}
	>
		<div className="center">
			<h1>{item.title}</h1>
			<p>{item.description}</p>
			<a href={item.link}><button>{item.button}</button></a>
		</div>
	</div>
))}
</Slider>
        

    </div>
    )
}

export default Info;