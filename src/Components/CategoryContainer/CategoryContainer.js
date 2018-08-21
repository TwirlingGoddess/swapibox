import React from 'react';
import './CategoryContainer.css';
import Card from '../Card/Card';

export const CategoryContainer = (props) => {
	const cardArray = props.stateArray.map(item => {
		return(
			<Card
				{...item}
				key={item.id}
			/>)
	})

	return(
		<div>
			{cardArray}
		</div>

	)
}

