import React, { Component } from 'react';
import { GamesList } from '../games-list/games-list';
import { TopGames } from '../top-games/top-games';
import './home-page.css';

export class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
            gamesOfPage: []
        }
    }
    componentDidMount() {
        fetch('https://top-games-il.herokuapp.com/api/games/')
            .then(res => res.json())
            .then(res => this.arrangingGames(res))
            .catch(err => console.log(err));
    }

    arrangingGames = (res) => {
        let games = res;
        const arr = [];
        for (let i = 0; i < games.length; i++) {
            let tmpGames = games.slice(games.length - 5, games.length);
            games.length = games.length - 5;
            arr.push(tmpGames);
        }
        this.setState({ games: arr, gamesOfPage: arr[0] });
        const div = document.querySelector('#tab0');
        div.classList.add('active');
    }

    updateGames = (index) => {
        this.setState({gamesOfPage : this.state.games[index]});
        window.scrollTo(0, 100);
        const oldActive = document.querySelector('.active');
        oldActive.classList.remove('active');
        const div = document.querySelector('#tab' + index);
        div.classList.add('active');
    }
    
    render() {
        return (
            <div className='homePage' id='homePage'>
                <TopGames></TopGames>
                <GamesList games={this.state.gamesOfPage}></GamesList>
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <button className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        {this.state.games.map((games, index) =>
                            this.state.games.length > index ? <li id={'tab' + index} className="page-item" key={index}><button className="page-link" onClick={() => this.updateGames(index)}>{index + 1}</button></li> : null

                        )}
                        <li className="page-item">
                            <button className="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>

            </div>
        );
    }
}