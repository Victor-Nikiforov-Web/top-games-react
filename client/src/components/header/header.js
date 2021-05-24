import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export class Header extends Component {
    constructor() {
        super();
        this.state = {
            gameToSearch: ""
        }
    }

    updateGameToSearch = (event) => {
        this.setState({ gameToSearch: event.target.value });
    }

    render() {
        return (
            <div className='header'>
                <div className='logo'>
                    <NavLink to={'/home'} exact>
                        <h1>Top Games</h1>
                    </NavLink>
                    <nav id="hamnav">
                        <label htmlFor="hamburger">&#9776;</label>
                        <input type="checkbox" id="hamburger" />
                        <div className='menu-bar' id="hamitems">
                            <NavLink to={'/home'} exact>
                                <li>Home</li>
                            </NavLink>
                            <input className="form-control me-2" type="search" placeholder="Search game" aria-label="Search" onChange={this.updateGameToSearch} value={this.state.gameToSearch} />
                            <NavLink to={'/search/' + this.state.gameToSearch} exact>
                                <button className="btn btn-outline-success" type="submit" onClick={() => this.setState({ gameToSearch: '' })}>Search</button>
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>

        );
    }
}