import React from 'react';
import './CategoryContainer.css';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';

export const CategoryContainer = ({stateArray, currentlyDisplayed}) => {
	
	const cardArray = stateArray.map(item => {
		return(
			<Card
				{...item}
				key={Date.now() * Math.random()}
				currentlyDisplayed = {currentlyDisplayed}
			/>)
	})

	return(
		<div className="Container">
			{cardArray}
		</div>

	)
}

CategoryContainer.propTypes = {
	stateArray: PropTypes.array
}