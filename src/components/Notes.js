import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editNote } from '../reducers/note';
const Note = (props) => {
	const editNote = () => {
		props.editNote(props.id);
	};
	return (
		<div className="column is-mobile is-3">
			<div className={`card single-note-${props.color}`}>
				<div className="card-header single-note-header">
					{props.title}
					<span className="edit-note" onClick={editNote}>
						<i className="fas fa-edit" />
					</span>
				</div>
				<div className="card-content single-note-content">
					<div className="media module last-line">
						<p className="text-justify">{props.note}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

class Notes extends Component {
	handleEditNote = (id) => {
		this.props.editNote(id);
	};
	render() {
		return (
			<div className="container m-1" id="notes">
				<div className="columns is-multiline ">
					{this.props.notes.map((note) => (
						<Note
							key={note._id}
							editNote={this.handleEditNote}
							id={note._id}
							title={note.title}
							color={note.color}
							note={note.note}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default connect((state) => state, { editNote })(Notes);
