import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import * as api from '../api'

jest.mock('../api')

describe('App', () => {
  it('should handle pokemon data when api responds and display header information', async() => {
    api.fetchPokemon.mockResolvedValue({
      results: [{name: "bulbasaur"}]
    })

    render(<App />)
    await waitFor(() => {
      screen.getByText("Pokemon Favorites")
      screen.getByText("All Pokemon")
    })
  })
})