import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import homeReducer from "../../redux/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    homeReducer /* preloadedState, */,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;