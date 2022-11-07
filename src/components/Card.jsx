import React, { useEffect, useState } from 'react'
import heart from '../heart-icon.svg'
import heartOutline from '../heart-line-icon.svg'


function Card ({pokemon}) {

  const [data, setData] = useState([])
  const [favorite, setFavorite] = useState(false)

  useEffect(() => {
    fetch(pokemon.url)
    .then(response => response.json())
    .then(data => setData(data))
  })


  if(data.length === 0){
    return( <p>Loading!</p> )
  } else {
  return (
    <div key={pokemon.name}>
      <h2>{pokemon.name}</h2>
      <p>{data.weight}</p>
      <img src={data.sprites.front_default} />
      <button type='button' className='btn' onClick={() => setFavorite(!favorite)}>
        <img className="btn__icon btn__icon-inactive" src={favorite ? heart : heartOutline} />
      </button>
      
    </div>
  )
  }

}

export default Card;