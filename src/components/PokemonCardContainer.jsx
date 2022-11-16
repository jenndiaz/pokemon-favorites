import React, { useState, useEffect } from 'react'
import Card from './Card'
import FavoritesContainer from './FavoritesContainer'

export default function PokemonCardContainer({pokemonList}) {

  const [sortOrder, setSortOrder] = useState('ASC')
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    if (favorites){
      setFavorites(favorites)
    }
  }, [])

  const favoriteNames = favorites.map(pokemon => pokemon.name)

  const handleFavorites = (item) => {
    if(favoriteNames.includes(item.name)){
      const newFavorites = favorites.filter(removal => removal !== item)
      setFavorites(newFavorites)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    } else {
      const newFavorites = [...favorites, item]
      setFavorites(newFavorites)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }
  } 
  const handleSortOnClick = () => sortOrder === 'ASC' ? setSortOrder('DESC') : setSortOrder('ASC')
  const sortedPokemonList = sortOrder === 'ASC' ? [...pokemonList].sort((a,b) => a.name > b.name ? 1 : -1) : [...pokemonList].sort((a,b) => a.name > b.name ? -1 : 1)
  const displayPokemon = () => sortedPokemonList.map(pokemon => ( 
    <Card 
      isFavorite={favoriteNames.includes(pokemon.name)}
      key={pokemon.name}
      handleFavorites ={handleFavorites} 
      pokemon={pokemon}
    />
  ))

  const favoritedPokemon = () => favorites.map(pokemon => (
    <Card 
      isFavorite={favorites.includes(pokemon)}
      key={pokemon.name}
      handleFavorites ={handleFavorites} 
      pokemon={pokemon}
  />
  ))


  return (
    <>
      <FavoritesContainer favoritedPokemon={favoritedPokemon} />
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
