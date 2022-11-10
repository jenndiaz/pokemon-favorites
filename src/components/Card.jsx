import React, { useEffect, useState } from 'react'
import { fetchPokemonDetails } from '../api'
import heart from '../heart-icon.svg'
import heartOutline from '../heart-line-icon.svg'

function Card ({handleFavorites, favorites, pokemon}) {

  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchPokemonDetails(pokemon.url)
      .then(data => { setData(data)})
      .catch((error) => setError(true))
  }, [pokemon])

  if(error){
    return <p>Error fetching this pokemon's details</p>
  } else if(data.length === 0){
    <div className='card' key={pokemon.name}>
      <h3>Loading Card...</h3>
    </div>
  } else {
    return (
      <div className='card' key={pokemon.name}>
        <h3>{pokemon.name}</h3>
        <img  className='card__image' src={data.sprites.front_default} alt={`drawing of ${pokemon.name} sprite`} />
        <p className='card__text'>{`weight: ${data.weight}`}</p>
        <button 
          type='button' 
          className='btn' 
          aria-label="Favorite" 
          aria-pressed={favorites.includes(pokemon) ? true : false} 
          onClick={() => handleFavorites(pokemon)}
        >
          <img className='btn__icon' alt="" src={favorites.includes(pokemon) ? heart : heartOutline} />
        </button>
      </div>
    )
  }
}

export default Card;