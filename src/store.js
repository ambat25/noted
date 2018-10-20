
import noteReducer from './reducers/note';
import {createStore} from 'redux'

const reducer = noteReducer
export default createStore(reducer)