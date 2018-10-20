import React, { Component } from 'react';
const Note = (props) => {
	return (
		<div className="column is-mobile is-2">
			<div className="card">
                <div className="card-header">
                    {props.title}
                </div>
				<div className="card-content">
					<div className="media">
						{props.note}
					</div>
				</div>
			</div>
		</div>
	);
};
const sample_note = {
    title:'sample sam ladj d jsalkj jds l',
    note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae nulla adipisci, tenetur pariatur autem officiis ex fugiat quis nostrum cumque fuga nisi fugit doloribus possimus ipsum culpa a. Dolorum."
}
export default class Notes extends Component {
	render() {
		return (<div className='container m-1' id='notes'>
        <div className="columns is-multiline " >
            <Note title ={sample_note.title} note={sample_note.note}  />
            <Note title ={sample_note.title} note={sample_note.note}  />
            <Note title ={sample_note.title} note={sample_note.note}  />
            <Note title ={sample_note.title} note={sample_note.note}  />
            <Note title ={sample_note.title} note={sample_note.note}  />
            <Note title ={sample_note.title} note={sample_note.note}  />
            <Note title ={sample_note.title} note={sample_note.note}  />
        </div>
        </div>
        );
	}
}
