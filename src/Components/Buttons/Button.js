import React from 'react';
import './Button.css'

const Button = (props) => {
	return(
		<button 
			value={props.value} 
			onClick={props.populateCards} 
		>
			{props.value}
		</button>
	);
}

export default Button