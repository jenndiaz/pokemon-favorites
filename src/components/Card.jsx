import React, { useEffect, useState } from 'react'
import heart from '../heart-icon.svg'
import heartOutline from '../heart-line-icon.svg'


function Card ({pokemon}) {

  const [data, setData] = useState([])
  const [favorite, setFavorite] = useState(false)

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
  }, [pokemon.url])


  if(data.length === 0){
    return( <p>Loading!</p> )
  } else {
  return (
    <div className='card' key={pokemon.name}>
      <h2>{pokemon.name}</h2>
      <img src={data.sprites.front_default} />
      <p>{`weight: ${data.weight}`}</p>
      <button type='button' className='btn' onClick={() => setFavorite(!favorite)}>
        <img className='btn__icon' src={favorite ? heart : heartOutline} />
      </button>
    </div>
  )
  }

}

export default Card;