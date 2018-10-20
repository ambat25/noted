import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Newnote from './components/Newnote';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Newnote />
				<Notes />
			</div>
		);
	}
}

export default App;
