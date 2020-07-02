import React from 'react';
import './App.scss';
import Donate from "./Components/Donate/Donate";
import Events from "./Components/Events/Events";
import NavBar from "./Reusables/NavBar";
import Info from "./Components/Info/Info"
import Panel from "./Reusables/Panel";
import Footer from "./Reusables/Footer";
import Carousel from "./Reusables/Carousel";
import Jamar from "./images/jamar_happy.jpg"

function App() {
  return (
    <div className="App">
    <NavBar />
      <div className="container">
          {/* <div className="targetElement"> */}
          <div className='animateTitle'>Project Birthday!</div>
          {/* </div> */}
        <div className="threePanelSection">
          <Panel title={"What is Project Birthday?"} image={Jamar} description={"No Facebook? No Problem. Project Birthday is meant to be a combination of promoting just causes, increase internet knowledge and protection, and celebrate... me! Support one of four organizations that support Black and Brown communities.  You do not have to be tech savy to protect yourself on the internet. "} />
        </div>
        <div className="donateDiv">< Donate /></div>
        < Carousel />
        <div className="infoDiv">< Info /></div>
        <div className='cake'>
          <div className='candles'></div>
        </div>
        <div className="eventsDiv">< Events /></div>
      </div> {/*Container div closer */}
      < Footer />
    </div> // App div closer
    
  );
}

export default App;
