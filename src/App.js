import React, { useState, useEffect } from 'react';
import logo from './pokemonLogo.png';
import PokemonCardContainer from './components/PokemonCardContainer';
import './App.css';

function App ()  {

  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then(response => response.json())
    .then(pokemon => setPokemonList(pokemon.results)
    )
  })

  if(pokemonList){
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="header__logo" alt="Pokemon logo" />
        </header>
        <main>
          <PokemonCardContainer pokemonList={pokemonList} />
        </main>
      </div>
  )
  } else{
    <p>Collecting Pokemon!</p>
  }


}

export default App;
