import { render } from '@testing-library/react'
import React from 'react'
import Card from './Card'

export default function pokemonCardContainer({pokemonList}) {

  const displayPokemon = () => pokemonList.map(pokemon => ( <Card pokemon={pokemon}/>))

    return (
    <div>{displayPokemon()}</div>
    )
}
