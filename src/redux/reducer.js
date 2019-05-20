import {
    GET_ALL_POKEMON,
    SEARCH_POKEMON,
    GET_DETAIL_POKEMON
} from './action';

const initialState = {
    pokemonList: [],
    pokemonSearchList: [],
    pokemon: {}
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMON:
            return {
                ...state,
                pokemonList: action.value,
                pokemonSearchList: action.value
            };
        case SEARCH_POKEMON:
            return {
                ...state,
                pokemonSearchList: action.value
            };
        case GET_DETAIL_POKEMON:
            return {
                ...state,
                pokemon: action.value
            };
        default:
            return state
    }
}

export default homeReducer;