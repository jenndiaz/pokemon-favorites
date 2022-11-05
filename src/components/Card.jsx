import React, { Component } from 'react'
import heart from '../heart-icon.svg'
import heartOutline from '../heart-line-icon.svg'


export default class Card extends Component {

  state = {
    data: [],
    favorite: false
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


  handleClick(){
    this.setState({favorite: !this.state.favorite})
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
        <button type='button' className='btn' onClick={() => this.handleClick()}>
          <img className="btn__icon btn__icon-inactive" src={this.state.favorite ? heart : heartOutline} />
        </button>
        
      </div>
    )
    }
  }
}
