import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import PokemonDetail from '../pokemonDetail/pokemonDetail'
import Home from './home/home'

class Container extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/pokemon/:name' component={PokemonDetail}/>
            </Switch>
        );
    }
}

export default Container;