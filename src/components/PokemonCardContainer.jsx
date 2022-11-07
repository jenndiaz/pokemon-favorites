import React, { useState } from 'react'
import Card from './Card'

export default function PokemonCardContainer({pokemonList}) {

  const [sortOrder, setSortOrder] = useState('ASC')

  const displayPokemon = () => pokemonList.map(pokemon => ( <Card pokemon={pokemon}/>))
  const handleSortOnClick = () => sortOrder === 'ASC' ? setSortOrder('DESC') : setSortOrder('ASC')


    return (
      <>
        <div>
          <button type='button' className='btn' onClick={handleSortOnClick}>Sort</button>
        </div>
        <div>{displayPokemon()}</div>
      </>
    )
}
