import React, {useState} from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import "./Info.scss";

const Info = () => {

    const content = [
        { title: 'First item', description: 'Lorem ipsum', button: 'hello'},
        { title: 'Second item', description: 'Lorem ipsum', button: 'hey'}
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
		style={{ background: `url('${item.image}') no-repeat center center` }}
	>
		<div className="center">
			<h1>{item.title}</h1>
			<p>{item.description}</p>
			<button>{item.button}</button>
		</div>
	</div>
))}
</Slider>
        

    </div>
    )
}

export default Info;