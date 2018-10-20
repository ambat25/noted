import React, { Component } from 'react';
import check from '../assets/check.svg';

const CustomRadio = (props) => {
	return (
		<div>
			<input type="radio" id={props.color} name={props.name} checked={props.checked} onChange={()=>props.changeColor(props.color)} value={props.color} />
			<label htmlFor={props.color}>
				<span>
					<img src={check} alt="Checked Icon" />
				</span>
			</label>
		</div>
	);
};

const colors = [
    'color-1',
    'color-2',
    'color-3',
    'color-4',
    'color-5',
    'color-6',
    'color-7',
    'color-8',
    'color-9',
    'color-10',
    'color-11',
    'color-12',
]

export default class SelectColor extends Component {
	render() {
		return (
			<div className="custom-radios">
                {colors.map(color=><CustomRadio changeColor={this.props.changeColor} checked={color === this.props.selectedColor?true:false} name='select-color' key={color} color={color} /> )}
			</div>
		);
	}
}
