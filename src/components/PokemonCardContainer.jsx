import React, { useState } from 'react'
import Card from './Card'

export default function PokemonCardContainer({pokemonList}) {

  const [sortOrder, setSortOrder] = useState('ASC')
  const handleSortOnClick = () => sortOrder === 'ASC' ? setSortOrder('DESC') : setSortOrder('ASC')
  const sortedPokemonList = sortOrder === 'ASC' ? [...pokemonList].sort((a,b) => a.name > b.name ? 1 : -1) : [...pokemonList].sort((a,b) => a.name > b.name ? -1 : 1)
  const displayPokemon = () => sortedPokemonList.map(pokemon => ( <Card pokemon={pokemon}/>))

    return (
      <>
        <div>
          <button type='button' className='btn' onClick={handleSortOnClick}>Sort</button>
        </div>
        <div className='card-container'>{displayPokemon()}</div>
      </>
    )
}
