import React from 'react'

export default function FavoritesContainer({displayFavoritePokemon}) {

  return (
    <>
      <h2>Your Favorites</h2>
      <hr />
        <div className='card-container'>
          {displayFavoritePokemon().length !== 0 ? displayFavoritePokemon() : <p>You have no favorite Pokemon. Favorite Pokemon below to see them here.</p>}
          </div>
      <hr />
    </>
    
  )
}
