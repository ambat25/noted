import React from 'react';
import { connect } from 'react-redux';
import { editNote, showNote, deleteNote } from '../reducers/note';

const Note = (props) => {
	const editNote = () => {
		props.editNote(props.note._id);
	};
	const showNote = () => {
		props.showNote(props.note._id);
	};
	const deleteNote = () => {
		props.deleteNote(props.note);
	};
	return (
		<div className="column is-mobile is-4">
			<div className={`card single-note-${props.note.color}`}>
				<div className="card-header single-note-header">
					{props.note.title}
					<span className="edit-note" onClick={editNote}>
						<i className="fas fa-edit" />
					</span>
					<span className="edit-note" onClick={deleteNote}>
						<i className="fas fa-trash" />
					</span>
				</div>
				<div className="card-content single-note-content">
					<div className="media module last-line" onClick={showNote}>
						<p className="text-justify">{props.note.note}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect((state) => state, { editNote, showNote, deleteNote })(Note);
