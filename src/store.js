
import noteReducer from './reducers/note';
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = noteReducer;
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));