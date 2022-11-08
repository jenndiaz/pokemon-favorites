import React, { useEffect, useState } from 'react'
import heart from '../heart-icon.svg'
import heartOutline from '../heart-line-icon.svg'

function Card ({handleFavorites, favorites, pokemon}) {

  const [data, setData] = useState([])

  useEffect(() => {
    let isActive = true

    fetch(pokemon.url)
    .then(response => response.json())
    .then(data => {
      if(isActive || !isActive) {
        setData(data)
      }
    }).catch((error) => console.log(error.message))
    return () => {
      isActive = false
    }
  }, [pokemon])

  if(data.length === 0){
    <div className='card' key={pokemon.name}>
      <h2>Loading Card...</h2>
    </div>
  } else {
    return (
      <div className='card' key={pokemon.name}>
        <h2>{pokemon.name}</h2>
        <img  className='card__image' src={data.sprites.front_default} alt={`drawing of ${pokemon.name} sprite`} />
        <p className='card__text'>{`weight: ${data.weight}`}</p>
        <button type='button' className='btn' aria-label="Favorite" aria-pressed={favorites.includes(pokemon.name) ? true : false} onClick={() => handleFavorites(pokemon.name)}>
          <img className='btn__icon' alt="" src={favorites.includes(pokemon.name) ? heart : heartOutline} />
        </button>
      </div>
    )
  }
}

export default Card;