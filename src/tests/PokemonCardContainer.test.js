import { render, fireEvent } from '@testing-library/react';
import PokemonCardContainer from '../components/PokemonCardContainer'

test('select sort option', () => {
  const pokemonList = [{
    name: 'bulbasaur',
    url:  'https://pokeapi.co/api/v2/pokemon/1/'
  }]
  const { getByTestId, getAllByTestId } = render (<PokemonCardContainer pokemonList={pokemonList}/>)
  fireEvent.change(getByTestId('select'), {target: {value: 'ASC'}})
  let options = getAllByTestId('select-option')
  expect(options[0].selected).toBeTruthy()
  expect(options[1].selected).toBeFalsy()
})