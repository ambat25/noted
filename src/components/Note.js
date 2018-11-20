import React from 'react';
import { connect } from 'react-redux';
import { editNote, showNote } from '../reducers/note';

const Note = (props) => {
	const editNote = () => {
		props.editNote(props.id);
	};
	const showNote = () => {
		props.showNote(props.id);
	};
	return (
		<div className="column is-mobile is-4">
			<div className={`card single-note-${props.color}`}>
				<div className="card-header single-note-header">
					{props.title}
					<span className="edit-note" onClick={editNote}>
						<i className="fas fa-edit" />
					</span>
				</div>
				<div className="card-content single-note-content">
					<div className="media module last-line" onClick={showNote}>
						<p className="text-justify">{props.note}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect((state) => state, { editNote, showNote })(Note);
