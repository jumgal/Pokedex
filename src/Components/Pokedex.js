import React, { Component } from 'react';
import Pokecard from './Pokecard';
import '../CSS/Pokedex.css';

class Pokedex extends Component {

    state = {
        pokes: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
        ]
    }

    render() {
        let winnerOrLoser;
        if (this.props.isWinner) {
            winnerOrLoser = <h1 className="winner">Winning Hand</h1>
        } else {
            winnerOrLoser = <h1 className="loser">Losing Hand</h1>
        }
        return (<div className="Pokedex">
            <h1>Pokedex!!!</h1>
            <p>Total Experience: {this.props.exp}</p>
             {winnerOrLoser}
            <div className="Pokedex-cards">
                {this.props.pokemon.map(poke => <Pokecard
                    key={poke.id}
                    name={poke.name}
                    id={poke.id}
                    type={poke.type}
                    bexp={poke.base_experience}
                />)}
            </div>
        </div>
        )
    }
}

export default Pokedex;