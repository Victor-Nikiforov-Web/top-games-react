import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './top-games.css';

export class TopGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topGames: []
        }
    }

    componentDidMount() {
        fetch('https://top-games-il.herokuapp.com/api/games/top-games')
            .then(res => res.json())
            .then(res => this.setState({ topGames: res }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div className='topGames'>
                <h3>Top 5 games</h3>
                <div className='topGamesCards container'>
                    <div className='row'>
                        {this.state.topGames.map(game =>
                            <div className='gameCard col-sm' key={game._id}>
                                <NavLink to={`/games/${game._id}`} exact>
                                <img src={game.imgUrl} alt="" />
                                <h5>{game.name}</h5>
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
