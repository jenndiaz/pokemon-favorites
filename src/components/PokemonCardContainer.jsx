import React, { useState } from 'react'
import Card from './Card'
import FavoritesContainer from './FavoritesContainer'

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

  const displayFavoritePokemon = () => favorites.map(pokemon => (
    <Card 
    key={pokemon.name}
    handleFavorites ={handleFavorites} 
    favorites={favorites}
    pokemon={pokemon}
  />
  ))


  return (
    <>
      <FavoritesContainer displayFavoritePokemon={displayFavoritePokemon} />
      <div className='sort-container'>
        <h2>All Pokemon</h2>
        <div>
          <label htmlFor='sort'>Sort By:</label>
          <select data-testid='select' className='btn' name='sort' id='sort' onChange={handleSortOnClick}>
            <option data-testid='select-option' value='ASC' defaultValue>Alphabetical A-Z</option>
            <option data-testid='select-option' value='DESC'>Alphabetical Z-A</option>
          </select> 
        </div>
      </div>
      <div className='card-container'>{displayPokemon()}</div>
    </>
  )
}
