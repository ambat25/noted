
import noteReducer from './reducers/note';
import {createStore} from 'redux'

const reducer = noteReducer
/* eslint-disable no-underscore-dangle */
export default createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */