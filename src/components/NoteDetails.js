import React, { Component } from 'react';
import { closeModal, editNote } from '../reducers/note';
import { connect } from 'react-redux';

class Newnote extends Component {
	closeModal = () => {
		this.props.closeModal();
	};

	closeModal = () => {
		this.props.closeModal();
	};
	editNote = (id) => {
		this.props.editNote(this.props.current_note._id);
	};
	render() {
		return (
			<div>
				<div className={`modal ${this.props.show_note_modal ? 'is-active' : ''}`}>
					<div onClick={this.closeModal} className="modal-background" />

					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title is-primary text-left">{this.props.current_note.title}</p>
							<button className="delete" onClick={this.closeModal} aria-label="close" />
						</header>

						<div className="modal-card-body text-justify note-details">{this.props.current_note.note}</div>

						<footer className="modal-card-foot">
							<button className="button is-success" onClick={this.editNote}>
								Edit
							</button>

							<button className="button" onClick={this.closeModal}>
								Close
							</button>
						</footer>
					</div>
				</div>
			</div>
		);
	}
}

export default connect((state) => state, { closeModal, editNote })(Newnote);
