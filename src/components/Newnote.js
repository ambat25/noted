import React, { Component } from 'react';
import { closeModal, addNote,updateCurrent, updateNote, fetchNotes } from '../reducers/note';
import { connect } from 'react-redux';
import SelectColor from './SelectColor';
class Newnote extends Component {
	
	componentDidMount() {
		this.props.fetchNotes()	
	}
	

	closeModal = () => {
		this.props.closeModal();
	};

	addNote = (e) => {
		e.preventDefault();
		const note = this.props.current_note;
		if (note.title && note.note && note.color) {
			if(note._id){
				this.props.updateNote(note);
				return;
			}
			note._id = new Date().toISOString(); 
			this.props.addNote(note);
		}
	};

	handleTitleChange = (e) => {
		this.props.updateCurrent({
			...this.props.current_note,
			title: e.target.value,
		})
	};

	handleNoteChange = (e) => {
		this.props.updateCurrent({
			...this.props.current_note,
			note: e.target.value,
		})
	};

	handleColorChange = (val) => {
		this.props.updateCurrent({
			...this.props.current_note,
			color:val,
		})
	};

	render() {
		return (
			<div>
				<div className={`modal ${this.props.show_modal ? 'is-active' : ''}`}>
					<div onClick={this.closeModal} className="modal-background" />

					<div className="modal-card">
						<header className="modal-card-head">
							<p className="modal-card-title is-primary">New Note</p>
							<button className="delete" onClick={this.closeModal} aria-label="close" />
						</header>

						<form className="modal-card-body" onSubmit={this.addNote}>
							<div className="field">
								<div className="control has-icons-left has-icons-right">
									<input
										className="input is-large is-primary"
										onChange={this.handleTitleChange}
										value={this.props.current_note.title || ''}
										type="text"
										placeholder="Title"
									/>

									<span className="icon is-medium is-left">
										<i className="fas fa-sticky-note fa-lg color-1" />
									</span>
								</div>
							</div>
							<div className="control">
								<textarea
									onChange={this.handleNoteChange}
									className="textarea is-primary has-fixed-size"
									placeholder="write your note here"
									value={this.props.current_note.note || ''}
									rows="10"
								/>
							</div>
							<SelectColor selectedColor={this.props.current_note.color} changeColor={this.handleColorChange} />
						</form>

						<footer className="modal-card-foot">
							<button className="button is-success" onClick={this.addNote}>
								{this.props.current_note.id ? 'Update' : 'Add'}
							</button>

							<button className="button" onClick={this.closeModal}>
								Cancel
							</button>
						</footer>
					</div>
				</div>
			</div>
		);
	}
}

export default connect((state) => state, { closeModal, addNote,updateCurrent, updateNote, fetchNotes })(Newnote);
