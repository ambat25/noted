import React, { Component } from 'react';
import {showModal} from '../reducers/note';
import {connect} from 'react-redux';

class Navbar extends Component {
	openNewNote = ()=>{
		this.props.showModal()
		console.log('should open')
	}
	render() {
		return (
			<header>
				<nav className="App-bg-primary " role="navigation" aria-label="main navigation">
					<div role="button" className="navbar-brand App-nav" aria-expanded="false">
						<div className="navbar-item m-1 has-text-left  has-text-light">
							<i className="fa fa-sticky-note fa-lg is-3" />
							&nbsp; Noted
						</div>
						<div onClick={this.openNewNote} className="navbar-item m-1 navbar-end has-text-right has-text-light" id='new-note'>
							<i className="fa fa-pencil-alt fa-lg" />
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default connect(state=>state,{showModal})(Navbar)