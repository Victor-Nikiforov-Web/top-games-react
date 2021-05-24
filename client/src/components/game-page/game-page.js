import React, { Component } from 'react';
import './game-page.css';

export class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            badge: ['primary', 'secondary', 'success', 'danger', 'warning text-dark', 'info text-dark', 'light text-dark', 'dark']
        }
    }
    componentDidMount() {
        const _id = this.props.match.params.game;
        fetch('https://top-games-il.herokuapp.com/api/games/get-one-game/' + _id)
            .then(res => res.json())
            .then(res => this.setState({ game: res }))
            .catch(err => console.log(err));
    }

    getRandomBadge = () => {
        return "badge bg-" + this.state.badge[Math.floor((Math.random() * this.state.badge.length))];
    }
    render() {
        return (
            <div className='gamePage'>
                <img src={this.state.game.imgUrl} alt='' />
                <h1>{this.state.game.name}</h1>
                <div className='genre'>
                    {this.state.game.genre ?
                        this.state.game.genre.map(g => <span key={g} className={this.getRandomBadge()}>{g}</span>)
                        : null}
                </div>
                <p className='description'>{this.state.game.description}</p>
                <br />
                <p>Realse Date : {this.state.game.releaseDate}</p>

                <div className='screenShots'>
                    {this.state.game.screenshots ?
                        this.state.game.screenshots.map((s, index) => <img src={s} alt='' key={index} />)
                        : null}
                </div>
                <br />
                <div className='systemReq'>
                <h5>Minimum system requirements :</h5>
                {this.state.game.systemRequirements ?
                <div>
                <p>{this.state.game.systemRequirements[0].OS}</p>
                <p>{this.state.game.systemRequirements[0].Processor}</p>
                <p>{this.state.game.systemRequirements[0].Memory}</p>
                <p>{this.state.game.systemRequirements[0].Graphics}</p>
                </div>
                : null}
                </div>
                <br/>
                <h5>Gameplay :</h5>
                <br/>
                <iframe width="560" height="315" src={this.state.game.gameplay} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>Size : {this.state.game.size}</p>
                <a href={this.state.game.downloadLink} target='_blank' rel="noreferrer">
                <button type="button" className="btn btn-light">Download</button>
                </a>
                <br/>

            </div>
        );
    }
}