import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
		}
	}

	render() {
		return(
			<button 
				value={this.props.value} 
				clicked={!this.state.clicked}>
					{this.props.value}
			</button>
		);
	}
}

export default Button