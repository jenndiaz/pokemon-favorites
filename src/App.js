import React, { useState, useEffect } from 'react';
import logo from './pokemonLogo.svg';
import PokemonCardContainer from './components/PokemonCardContainer';
import './App.css';
import { fetchPokemon } from './api';

function App ()  {

  const [pokemonList, setPokemonList] = useState([])
  const [error, setError] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetchPokemon(offset)
      .then(pokemon => {setPokemonList(pokemonList.concat(pokemon.results)) })
      .catch((error) => setError(true))
  }, [offset])

  const handleLoadMoreClick = () => {
    setOffset(offset + 20)
  }

  if(error){
    return <p>Error fetching pokemon from API</p>
  } else if (pokemonList) {
    return (
      <div className="app">
        <header className="header">
          <img src={logo} className="header__logo" alt="Pokemon PokeBall logo" />
          <h1>Pokemon Favorites</h1>
        </header>
        <main>
          <PokemonCardContainer handleLoadMoreClick={handleLoadMoreClick} offset={offset} pokemonList={pokemonList} />
        </main>
      </div>
    )
  } else{
    return <p>Collecting Pokemon!</p>
  }
}

export default App;