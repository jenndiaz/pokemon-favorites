import React, { Component } from 'react';
import logo from './pokemonLogo.png';
import './App.css';

class App extends Component  {

  state = { 
    pokemonList: [],
  }

  componentDidMount(){
    this.getPokemonList()
  }

  getPokemonList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .then(response => response.json())
      .then(pokemon => this.setState({
          pokemonList: pokemon.results
        })
      )
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <main>
        </main>
      </div>
    )
  }
}

export default App;
