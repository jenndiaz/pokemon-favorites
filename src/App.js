import React, { useState, useEffect } from 'react';
import logo from './pokemonLogo.svg';
import PokemonCardContainer from './components/PokemonCardContainer';
import './App.css';
import { fetchPokemon } from './api';

function App ()  {

  const [pokemonList, setPokemonList] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchPokemon()
      .then(pokemon => {setPokemonList(pokemon.results) })
      .catch((error) => setError(true))
  }, [])

  if(error){
    return <p>Error fetching pokemon from API</p>
  } else if (pokemonList) {
    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="header__logo" alt="Pokemon PokeBall logo" />
          <h1>Pokemon Favorites</h1>
        </header>
        <main>
          <PokemonCardContainer pokemonList={pokemonList} />
        </main>
      </div>
  )
  } else{
    return <p>Collecting Pokemon!</p>
  }

}

export default App;
