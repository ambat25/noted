import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editNote, showNote } from '../reducers/note';
import Note from './Note';

class Notes extends Component {
	render() {
		return (
			<div className="container m-1" id="notes">
				<div className="columns is-multiline ">
					{this.props.notes.map((note) => (
						<Note key={note._id} id={note._id} title={note.title} color={note.color} note={note.note} />
					))}
				</div>
			</div>
		);
	}
}

export default connect((state) => state, { editNote, showNote })(Notes);
