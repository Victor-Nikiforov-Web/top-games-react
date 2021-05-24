import React, { Component } from 'react';
import { GamesList } from '../games-list/games-list';

export class SearchGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: []
        }
    }

    componentDidMount = () => {
        fetch('http://localhost:3001/api/games/search-game/' + this.props.match.params.game)
            .then(res => res.json())
            .then(result => this.setState({result}))
            .catch(err => console.log(err));
    }
    componentDidUpdate = (prevProps) => {
        if(this.props.match.params.game !== prevProps.match.params.game){
            this.componentDidMount();
        }
    }
    render() {
        return (
            <div className='searchPage'>
                {this.state.result.length !== 0 ? <GamesList games={this.state.result}></GamesList> : <h1 style={{color: 'white'}}>"{this.props.match.params.game}" not found.</h1>}
            </div>
        );
    }
}