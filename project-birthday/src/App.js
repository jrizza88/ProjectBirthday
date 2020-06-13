import React from 'react';
import './App.css';
import Donate from "./Components/Donate/Donate";
import Events from "./Components/Events/Events";
import NavBar from "./Reusables/NavBar";
import Panel from "./Reusables/Panel";

function App() {
  return (
    <div className="App">
    <NavBar />
    < Panel />
      <div className="container">
      <NavBar />
        <h1 className='title'>Project Birthday!</h1>
        <div className='cake'>
            <div className='candles'></div>
        </div>
      </div>
      < Donate />
      < Events />
    </div>
  );
}

export default App;
