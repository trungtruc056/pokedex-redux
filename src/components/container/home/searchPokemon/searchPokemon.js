import React, {Component} from 'react';
import {Input} from "reactstrap";

class SearchPokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: ''
        }
    }

    handleChange = (e) =>  {
        this.setState({
            searchString: e.target.value
        });
        this.props.searchPokemon(e.target.value);
    };

    render() {
        const {searchString} = this.state;
        return (
            <Input
                type="text"
                value={searchString}
                onChange={this.handleChange}
                placeholder="Search Name Pokemon"
            />
        );
    }
}

export default SearchPokemon