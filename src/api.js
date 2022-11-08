export const fetchPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  .then(response => {
    if (response.status === 200) return response.json()
    else throw new Error('Invalid Api reponse')
  })

}