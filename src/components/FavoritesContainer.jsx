import React from 'react'

export default function FavoritesContainer({favoritedPokemon}) {

  const displayFavorites = () => {
    if(favoritedPokemon().length !== 0){
      return <div className='card-container'>{favoritedPokemon()}</div>
    } else {
      return <p>You have no favorite Pokemon. Favorite Pokemon below to see them displayed here.</p>
    }
  }

  return (
    <>
      <h2>Your Favorites</h2>
      <hr />
        {displayFavorites()}
      <hr />
    </>
    
  )
}
