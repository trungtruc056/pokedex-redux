import React, {Component} from 'react';
import PokemonBox from "../pokemonBox/pokemonBox";
import {Row, Col} from "reactstrap";
import PaginationItem from "reactstrap/es/PaginationItem";
import PaginationLink from "reactstrap/es/PaginationLink";
import Pagination from "reactstrap/es/Pagination";

class PokemonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
        };
        this.pageSize = 60;
    }

    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            currentPage: index
        });
    }

    render() {
        const {currentPage} = this.state;
        const {pokemonList} = this.props;
        this.pagesCount = Math.ceil(pokemonList.length / this.pageSize);

        return (
            <Row>
                {pokemonList.length > 0 ? pokemonList
                    .slice(
                        currentPage * this.pageSize,
                        (currentPage + 1) * this.pageSize
                    )
                    .map((box, index) => (
                        <PokemonBox key={index} item={box}/>
                    )) : null
                }
                <Col md="12">
                    <div className="pagination-wrapper d-flex justify-content-center">
                        <Pagination aria-label="Page navigation example">
                            <PaginationItem disabled={currentPage <= 0}>
                                <PaginationLink
                                    onClick={e => this.handleClick(e, currentPage - 1)}
                                    previous
                                    href="#"
                                />
                            </PaginationItem>
                            {[...Array(this.pagesCount)].map((page, i) =>
                                <PaginationItem active={i === currentPage} key={i}>
                                    <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                        {i + 1}
                                    </PaginationLink>
                                </PaginationItem>
                            )}
                            <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
                                <PaginationLink
                                    onClick={e => this.handleClick(e, currentPage + 1)}
                                    next
                                    href="#"
                                />
                            </PaginationItem>
                        </Pagination>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default PokemonList