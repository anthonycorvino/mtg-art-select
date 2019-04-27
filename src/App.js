import React from 'react';
import useDeckForm from './CustomHooks';
import './App.css';

/*
Main app class

TODO: 
Clean this up into multiple files 
Add more comments 
*/

const App = () => {


  const deckSubmitted = () => {
    /* Hook that updates once the decklist has been imported
    from clipboard. */

    alert('Decklist imported');
    alert(inputs.deckList);
    
    /* There's probably a better way to do this....
    updating the css display element to hide and show 
    div's and p's dynamically */
    document.getElementById("containsText")
      .style.display = 'block';

    // display alternate arts
    document.getElementById("containerAlts")
      .style.display = 'block';
  }

  /* Object that holds variables while the page is live such as
  user input using the state variable, see CustomHooks.js for better
  understanding */
  const {inputs, handleInputChange, handleSubmit} 
    = useDeckForm(deckSubmitted); 



  /* Returning the raw html back to React renderer, this needs to
  be cleaned up and moved into multiple other files */
  return (
    <div className="App">
      <h1>MTG Art Select</h1>
        <div id="containerImport">
          <p id="pageText">Import your decklist here....</p>
          <form onSubmit={handleSubmit}>
            <div>
              <label>decklist</label>
              <input type="text" name="deckList" 
            /* This is where deckList is stored in inputs object
               Decklist is also required to update the page */
              onChange={handleInputChange} 
              value={inputs.deckList} required />
            </div>
          </form>
        </div>
        <div id="containerLands">  /*Placeholder until we figure out the logic to display
           correct items on screen */
          <p id="containsText">Your deck contains the following 
          lands: Swamp, Island</p> 
        </div>
        
        /* TODO: move style tag for containerAlts into css file
         and move all the image divs into another file if 
         possible for readability */
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
