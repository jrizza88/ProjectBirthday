import React from 'react';
import './App.scss';
import Donate from "./Components/Donate/Donate";
import Events from "./Components/Events/Events";
import NavBar from "./Reusables/NavBar";
import Info from "./Components/Info/Info"
import Panel from "./Reusables/Panel";
import Footer from "./Reusables/Footer";

function App() {
  return (
    <div className="App">
    <NavBar />
      <div className="container">
        <div className="targetElement">
        <div className='animateTitle'>Project Birthday!</div>
        </div>

      <div className="threePanelSection">
        <Panel title={"Project Birthday"} description={"Charmander pokeball team rocket char pikachu jiggly puff pokedex i choose you sycther gameboy colour battle onyx i choose you trainer gameboy colour pokedex thunderbolt i choose you sycther gameboy colour mew jiggly puff pikachu onyx pokedex pikachu trainer abra ash mew gameboy colour a wild bulbasaur mew-two meaowth charmander pikachu growlith team rocket mew-two. Bulbasaur pokedex ash gym battle jiggly puff blasting of again onyx bulbasaur professor rowan a wild growlith trainer team rocket team rocket abra squirtle jiggly puff growlith ash pokedex a wild pokeball mew-two thunderbolt thunderbolt i choose you growlith jiggly puff abra pokedex ace trainer pokeball pikachu blasting of again thunderbolt charmander battle gym battle gym battle squirtle."} />
      </div>
      <div className="donateDiv">< Donate /></div>
      <div className="infoDiv">< Info /></div>
      <div className="eventsDiv">< Events />
      <div className='cake'>
            <div className='candles'></div>
        </div>
      </div>
      </div> {/*Container div close */}
      < Footer />
    </div>
    
  );
}

export default App;
