import React from 'react';
import './CategoryContainer.css';
import { Card } from '../Card/Card';

export const CategoryContainer = ({stateArray}) => {
	const cardArray = stateArray.map(item => {
		console.log('working')
		return(
			<Card
				{...item}
				key={Date.now() * Math.random()}
			/>)
	})

	return(
		<div className="Container">
			{cardArray}
		</div>

	)
}

