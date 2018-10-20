
const SHOW_MODAL = "SHOW_MODAL"
const CLOSE_MODAL = "CLOSE_MODAL"
const ADD_NOTE = "ADD_NOTE"
const REMOVE_NOTE = "REMOVE_NOTE"

export const showModal = ()=>({type:SHOW_MODAL,payload:true})
export const closeModal = ()=>({type:CLOSE_MODAL,payload:false})
export const newNote = (note)=>({type:ADD_NOTE,payload:note})
export const removeNote = (id)=>({type:REMOVE_NOTE,payload:id})

export const addNote = (note)=>{
    return (dispatch)=>{
        console.log(dispatch)
        dispatch(newNote(note))
    }
}
export const deleteNote = (note)=>{
    return (dispatch)=>{
        console.log(dispatch)
        dispatch(newNote(note))
    }
}

const initialState = {
    show_modal:false,
    new_note:[],
    notes:[]
}
export default (state=initialState,action)=>{
    switch (action.type) {
        case SHOW_MODAL:
            return {...state,show_modal:action.payload}
        case CLOSE_MODAL:
            return {...state,show_modal:action.payload}
        case ADD_NOTE:
            return {...state,notes:[...state.notes,action.payload]}
        case REMOVE_NOTE:
            return {...state,notes:state.notes.filter(note=>note._id !== action.payload)}
        default:
            return state;
    }
}