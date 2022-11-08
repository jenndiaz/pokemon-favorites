import React, { useState } from 'react'
import Card from './Card'

export default function PokemonCardContainer({pokemonList}) {

  const [sortOrder, setSortOrder] = useState('ASC')
  const [favorites, setFavorites] = useState([])


  const handleFavorites = (name) => {
    if(favorites.includes(name)){
      setFavorites(favorites.filter(removal => removal !== name ))
    } else {
      setFavorites([...favorites, name])
    }
  } 
  const handleSortOnClick = () => sortOrder === 'ASC' ? setSortOrder('DESC') : setSortOrder('ASC')
  const sortedPokemonList = sortOrder === 'ASC' ? [...pokemonList].sort((a,b) => a.name > b.name ? 1 : -1) : [...pokemonList].sort((a,b) => a.name > b.name ? -1 : 1)
  const displayPokemon = () => sortedPokemonList.map(pokemon => ( 
    <Card 
      key={pokemon.name}
      handleFavorites ={handleFavorites} 
      favorites={favorites}
      pokemon={pokemon}
    />
  ))


    return (
      <>
        <div className='sort-container'>
          <label>Sort By:</label>
          <select className='btn' name='sort' id='sort' onChange={handleSortOnClick}>
            <option value='ASC' defaultValue>Alphabetical A-Z</option>
            <option value='DESC'>Alphabetical Z-A</option>
          </select> 
        </div>
        <div className='card-container'>{displayPokemon()}</div>
      </>
    )
}
