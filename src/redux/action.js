import PokemonAPI from './PokemonAPI';

export const GET_ALL_POKEMON = "GET_ALL_POKEMON";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const GET_DETAIL_POKEMON = "GET_DETAIL_POKEMON";

export const getAllPokemon = () => {
    return dispatch => {
        PokemonAPI.getAll().then((res) => {
            dispatch({
                type: GET_ALL_POKEMON,
                value: res.data.results
            });
        });
    }
};

export const searchPokemon = (searchString) => {
    return (dispatch, getState) => {
        let search = searchString.trim().toLowerCase();
        if (search.length > 0) {
            getState().pokemonSearchList = getState().pokemonList.filter(cell => cell.name.toLowerCase().match(search));
        }
        if (searchString.length === 0) {
            getState().pokemonSearchList = getState().pokemonList;
        }
        dispatch({
            type: SEARCH_POKEMON,
            value: getState().pokemonSearchList
        })
    }
};

export const getDetailPokemon = (name) => {
    return dispatch => {
        PokemonAPI.getDetail(name).then((res) => {
            dispatch({
                type: GET_DETAIL_POKEMON,
                value: {...res.data}
            });
        });
    }
};