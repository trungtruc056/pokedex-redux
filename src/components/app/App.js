import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Container from '../container/container'
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Container/>
                </div>
            </Provider>
        );
    }
}


export default App;