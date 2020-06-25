import React, {useState} from 'react';
import Slider from 'react-animated-slider';
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import "./Donate.scss"
import change from "../../images/change.png"
import fortune from "../../images/fortunesociety.png"
//import fortune from "../../images/fortune.jpeg"
import nysylc from "../../images/nysylc3.jpeg"
import okra from "../../images/okra2.png"
const Donate2 = () => {
    const organizations = [
        { image: okra, title: 'The Okra Project', description: 'Supports Black Trans Lives', button: 'Donate Now', link: "https://www.theokraproject.com/"},
        { image: nysylc, title: '1Password', description: 'Lorem ipsum', button: 'Donate Now', link: "https://1password.com/"},
        { image: change, title: 'Second item', description: 'Lorem ipsum', button: 'Donate Now', link: "https://secure.actblue.com/contribute/page/support-us"},
        { image: fortune, title: 'Fortune', description: 'Lorem ipsum', button: 'Donate Now', link: "https://1password.com/"}
    ]
    return (
    <div className="donateContainer">
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
  

<Slider classNames={horizontalCss}>
{organizations.map((item, index) => (
	<div
        key={index}
       style={{ background: `url('${item.image}') no-repeat center center`, width: '100%', backgroundSize: "cover"  }}
	>
		<div 
        className="center"
        >
            <div className="title">{item.title}</div>
			<p className="description">{item.description}</p>
            <div className="buttonDiv">
            <a href={item.link}><button>{item.button}</button></a>
            </div>
		</div>
	</div>
))}
</Slider>
        

    </div>
    )
}

export default Donate2;