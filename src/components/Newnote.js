import React, { Component } from 'react';
import { closeModal } from '../reducers/note';
import { connect } from 'react-redux';
import SelectColor from './SelectColor';
class Newnote extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			note: '',
			color: ''
		};
	}

	closeModal = () => {
		this.props.closeModal();
	};

	addNote = (e) => {
		e.preventDefault();
		const note = {
			title: this.state.title,
			note: this.state.note,
			color: this.state.color
		};
		if (note.title && note.note && note.color) {
			console.log(note);
		}
	};

	handleTitleChange = (e) => {
		this.setState({
			title: e.target.value
		});
	};

	handleNoteChange = (e) => {
		this.setState({
			note: e.target.value
		});
	};

	handleColorChange = (val) => {
		this.setState({
			color: val
		});
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
									rows="10"
								/>
							</div>
							<SelectColor selectedColor={this.state.color} changeColor={this.handleColorChange} />
						</form>

						<footer className="modal-card-foot">
							<button className="button is-success" onClick={this.addNote}>
								Add
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

export default connect((state) => state, { closeModal })(Newnote);
