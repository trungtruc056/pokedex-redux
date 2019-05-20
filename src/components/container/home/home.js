import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllPokemon, searchPokemon} from "../../../redux/action";
import {Col, Container, Row} from "reactstrap";
import '../../../assets/styles/home.scss'
import PokemonList from "./pokemonList/pokemonList";
import SearchPokemon from "./searchPokemon/searchPokemon";

class Home extends Component {
    componentDidMount() {
        this.props.getAllPokemon();
    }

    render() {
        const {pokemonSearchList} = this.props;
        const {searchPokemon} = this.props;

        return (
            <div className="home">
                <Container>
                    <Row>
                        <Col className="mb-4">
                            <SearchPokemon searchPokemon={searchPokemon}
                                           pokemonList={pokemonSearchList}/>
                        </Col>
                    </Row>
                    <PokemonList pokemonList={pokemonSearchList}/>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    pokemonSearchList: state.pokemonSearchList
});

const mapDispatchToProps = dispatch => ({
    getAllPokemon: () => dispatch(getAllPokemon()),
    searchPokemon: (str) => dispatch(searchPokemon(str))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Home);