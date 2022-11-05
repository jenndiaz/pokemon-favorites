import React, { Component } from 'react'

export default class Card extends Component {

  state = {
    data: []
  }

  componentDidMount(){
    this.getPokemonData()
  }

  getPokemonData = () => {
    fetch(this.props.pokemon.url)
      .then(response => response.json())
      .then(data => this.setState({
        data
      }))
  }

  render() {
    if(this.state.data.length === 0){
      return( <p>Loading!</p> )
    } else {
    return (
      <div key={this.props.pokemon.name}>
        <h2>{this.props.pokemon.name}</h2>
        <p>{this.state.data.weight}</p>
        <img src={this.state.data.sprites.front_default} />
      </div>
    )
    }
  }
}
