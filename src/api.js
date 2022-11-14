export const fetchPokemon = (offset = 0) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
  .then(response => {
    if (response.status === 200) return response.json()
    else throw new Error('Invalid Api response')
  })
}

export const fetchPokemonDetails = (url) => {
  return fetch(url)
  .then(response => {
    if (response.status === 200) return response.json()
    else throw new Error('Invalid Api response')
  })
}