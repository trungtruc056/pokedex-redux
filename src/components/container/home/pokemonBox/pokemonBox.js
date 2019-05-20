import React, {Component} from 'react';
import {
    Card, CardBody,
    CardTitle, Button, Col
} from 'reactstrap';
import {Link} from "react-router-dom";
import '../../../../assets/styles/pokemonBox.scss'

class PokemonBox extends Component {
    render() {

        return (
            <Col xs="12" sm="6" md="2" lg="2">
                <div className="pokemon-box">
                    <Card>
                        <CardBody>
                            <CardTitle>{this.props.item.name}</CardTitle>
                            <Button color="primary btn-view">
                                <Link to={`/pokemon/${this.props.item.name}`}>View More</Link>
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </Col>
        );
    }
}

export default PokemonBox;