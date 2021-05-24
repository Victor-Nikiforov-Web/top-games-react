import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './games-list.css';

export class GamesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            badge: ['primary', 'secondary', 'success', 'danger', 'warning text-dark', 'info text-dark', 'light text-dark', 'dark']
        }
    }
 getRandomBadge = () => {
        return "badge bg-" + this.state.badge[Math.floor((Math.random() * this.state.badge.length))];
    }
    render() {
        return (
            <div className='gamesList'>
                {this.props.games ?
                   this.props.games.map(game =>
                    <div className='game-card' key={game.name}>
                    <h3>{game.name}</h3>
                    <img src={game.imgUrl} alt='' />
                    <div className='genre'>
                        {game.genre ?
                            game.genre.map(g => <span key={g} className={this.getRandomBadge()}>{g}</span>)
                            : null}
                    </div>
                    <p>{game.description}</p>
                    <NavLink to={`/games/${game._id}`} exact>
                    <button type="button" className="btn btn-primary">View more & download</button>
                    </NavLink>
                </div>
                )
                    : null}
            </div>
        );
    }
}