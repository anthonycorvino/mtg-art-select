import React from 'react';
import { useClipboard } from 'use-clipboard-copy';
import './App.css';

function App(fullDecklist) {
  const clipboard = useClipboard();

  return (
    <div className="App">
      <h1>MTG Art Select</h1>
        <div id="containerImport">
          <p id="pageText">Import your decklist here....</p>
          <button onClick={clipboard.copy}>Import</button>
        </div>
        <div id="containerLands">
          <p id="pageText">Your deck contains the following 
          lands: Swamp, Island</p>
        </div>
        
        
        <div id="containerAlts" style={{backgroundColor: "#878778"}}>
          <a href="https://www.mtgpics.com/pics/big/pmo/485.jpg">
            <img src="https://www.mtgpics.com/pics/big/pmo/485.jpg" 
            alt="Swamp-PMO485"></img>
          </a>
          <a href="https://www.mtgpics.com/pics/big/war/258.jpg">
            <img src="https://www.mtgpics.com/pics/big/war/258.jpg" 
            alt="Swamp-WAR258"></img>
          </a>
          <a href="https://www.mtgpics.com/pics/big/pmo/485.jpg">
            <img src="https://www.mtgpics.com/pics/big/pmo/485.jpg" 
            alt="Swamp-PMO485"></img>
          </a>
            <a href="https://www.mtgpics.com/pics/big/pmo/485.jpg">
            <img src="https://www.mtgpics.com/pics/big/pmo/485.jpg" 
            alt="Swamp-PMO485"></img>
          </a>
          <a href="https://www.mtgpics.com/pics/big/war/258.jpg">
            <img src="https://www.mtgpics.com/pics/big/war/258.jpg" 
            alt="Swamp-WAR258"></img>
          </a>
          <a href="https://www.mtgpics.com/pics/big/pmo/485.jpg">
            <img src="https://www.mtgpics.com/pics/big/pmo/485.jpg" 
            alt="Swamp-PMO485"></img>
          </a>
          <a href="https://www.mtgpics.com/pics/big/pmo/485.jpg">
            <img src="https://www.mtgpics.com/pics/big/pmo/485.jpg" 
            alt="Swamp-PMO485"></img>
          </a>
          <a href="https://www.mtgpics.com/pics/big/war/258.jpg">
            <img src="https://www.mtgpics.com/pics/big/war/258.jpg" 
            alt="Swamp-WAR258"></img>
          </a>
          <a href="https://www.mtgpics.com/pics/big/pmo/485.jpg">
            <img src="https://www.mtgpics.com/pics/big/pmo/485.jpg" 
            alt="Swamp-PMO485"></img>
          </a>
          <a href="https://www.mtgpics.com/pics/big/war/255.jpg">
            <img src="https://www.mtgpics.com/pics/big/war/255.jpg" 
            alt="Swamp-PMO485"></img>
          </a>
          <a href="https://www.mtgpics.com/pics/big/pmo/483.jpg">
            <img src="https://www.mtgpics.com/pics/big/pmo/483.jpg" 
            alt="Swamp-PMO485"></img>
          </a>
          <a href="https://www.mtgpics.com/pics/big/war/255.jpg">
            <img src="https://www.mtgpics.com/pics/big/war/255.jpg" 
            alt="Swamp-PMO485"></img>
          </a>
        </div>
    </div>
  );
}

export default App;
