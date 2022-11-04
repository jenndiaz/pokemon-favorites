import React, { Component } from 'react';
import logo from './pokemonLogo.png';
import './App.css';

class App extends Component  {

  state = { 
    pokemonList: [],
  }

  componentDidMount(){
    console.log('mounted')
    this.getPokemon()
  }

  getPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then(response => response.json())
      .then(pokemon => this.setState({
        pokemonList: pokemon
      }))
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
