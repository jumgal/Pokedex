import React, { Component } from 'react';
import '../CSS/Pokecard.css'
// const POKE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const newUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';


class Pokecard extends Component {

    findThree = num => num <= 999 ? `00${num}`.slice(-3) : num;

    render() {
        let imgUrl = `${newUrl}${this.findThree(this.props.id)}.png`
        return (
            <div className='Pokecard'>
                <h1>{this.props.name}</h1>
                <img src={imgUrl} alt={this.props.name} />
                <div>
                    Type: {this.props.type}
                </div>
                <div>
                    EXP: {this.props.bexp}
                </div>
            </div>
        )
    }
}

export default Pokecard;