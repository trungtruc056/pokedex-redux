import React, { Component } from 'react';
import PokemonAPI from "../../redux/PokemonAPI";
import {Col, Container, Row} from "reactstrap";

class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonDetail: {}
        }
    }

    componentDidMount() {
        const pokemonName = this.props.match.params.name;
        PokemonAPI.getDetail(pokemonName).then(res => {
            this.setState({
                pokemonDetail: {...res.data}
            })
        });
    }

    render() {
        const {pokemonDetail} = this.state;
        pokemonDetail.sprites && (this.urlImg = pokemonDetail.sprites.front_default);
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="m-auto text-center">
                            <img src={this.urlImg} alt=""/>
                            <p className="font-weight-bold text-uppercase">{pokemonDetail.name}</p>
                            <p>Height: {pokemonDetail.height}</p>
                            <p>Weight: {pokemonDetail.weight}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default PokemonDetail;