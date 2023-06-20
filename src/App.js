import './App.css';
import { useState } from 'react';
import { Axios } from 'axios';

function App() {

  const [pokemonName, setPokemonName] = useState('')

  const searchPokemon = ()=>{}

  return (
    <div className="App">
      <div className="header">Pokemon API
        <div className="searchbar">
          <input className="input" type="text" onChange={(event)=>{setPokemonName(event.target.value)}} placeholder="Search" />
          <button className="button" onClick={searchPokemon}>
            <span>I</span>
            <span>Choose</span>
            <span>You!</span>
          </button>
        </div>
      </div>
      <div className="body">Pokemon</div>
      <div className="footer">Pokemon Links</div>
    </div>
  );
}

export default App;
