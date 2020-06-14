import React from 'react';
import './App.scss';
import Donate from "./Components/Donate/Donate";
import Events from "./Components/Events/Events";
import NavBar from "./Reusables/NavBar";
import Panel from "./Reusables/Panel";

function App() {
  return (
    <div className="App">
    <NavBar />
      <div className="container">
        <h1 className='title'>Project Birthday!</h1>
        <div>Main Text</div>
        <div className='cake'>
            <div className='candles'></div>
        </div>
      </div>
      <div className="threePanelSection">
        <Panel title={"Causes"} />
        <Panel title={"Activities"} />
        <Panel title={"Info"}/>
      </div>
      <div className="donateDiv">< Donate /></div>
      <div className="eventsDiv">< Events /></div>
    </div>
  );
}

export default App;
