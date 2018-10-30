const SHOW_MODAL = 'SHOW_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const ADD_NOTE = 'ADD_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';
const REMOVE_NOTE = 'REMOVE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';
const UPDATE_CURRENT = 'UPDATE_CURRENT';

export const showModal = () => ({ type: SHOW_MODAL, payload: true });
export const closeModal = () => ({ type: CLOSE_MODAL, payload: false });
export const newNote = (note) => ({ type: ADD_NOTE, payload: note });
export const removeNote = (id) => ({ type: REMOVE_NOTE, payload: id });
export const editNote = (id) => ({ type: EDIT_NOTE, payload: id });
export const updateCurrent = (note)=>({type:UPDATE_CURRENT,payload:note})
export const updateNote = (note)=>({type:UPDATE_NOTE,payload:note})

export const addNote = (note) => {
	return (dispatch) => {
		dispatch(newNote(note));
	};
};
export const deleteNote = (note) => {
	return (dispatch) => {
		dispatch(newNote(note));
	};
};

const initialState = {
	show_modal: false,
    new_note: [],
    current_note:{
	},
	notes: [
		{
			id: 1,
			note: 'hello',
			title: 'hello',
			color: 'color-1'
		}
	]
};
export default (state = initialState, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return { ...state, show_modal: action.payload };
		case CLOSE_MODAL:
			return { ...state, show_modal: false, current_note:{} };
		case ADD_NOTE:
			return { ...state, current_note:{}, notes: [ ...state.notes, action.payload ], show_modal: false };
		case UPDATE_NOTE:
			return { ...state, current_note:{}, notes: state.notes.map(note=> note.id === action.payload.id ? action.payload : note), show_modal: false };
		case REMOVE_NOTE:
			return { ...state, notes: state.notes.filter((note) => note._id !== action.payload) };
		case UPDATE_CURRENT:
			return { ...state, current_note:{...state.current_note,...action.payload}};
		case EDIT_NOTE:
			return { ...state, show_modal: true, current_note:state.notes.find(note=>note.id===action.payload) };
		default:
			return state;
	}
};
