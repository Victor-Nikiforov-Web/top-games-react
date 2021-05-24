import React, { Component } from 'react';
import { Header } from '../header/header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './layout.css';
import { HomePage } from '../home-page/home-page';
import { GamePage } from '../game-page/game-page';
import { SearchGame } from '../search-game/search-game';

export class Layout extends Component{
 render(){
     return(
        <div className='layout'>
            <BrowserRouter>
        <header>
        <Header></Header>
        </header>
        <main>
            <Switch>
            <Route path='/home' component={HomePage} exact />
            <Route path='/games/:game' component={GamePage} exact />
            <Route path='/search/:game' component={SearchGame} exact />
            <Route path='/' component={HomePage} exact />
            </Switch>
        </main>
        <footer>

        </footer>
        </BrowserRouter>
    </div>
     );
 }
}