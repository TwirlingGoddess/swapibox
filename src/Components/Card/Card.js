import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({name, homeworld, species, population, favorite, terrain, climate, residents, model, class, passengerNumber}) => {
	
	return(
		<div>
			<h2>{name}</h2>




		</div>

	)

}

Card.propTypes = {
	name: string,
	homeworld: string, 
	species: string, 
	population: string, 
	favorite: string, 
	terrain: string, 
	climate: string, 
	residents: string, 
	model: string, 
	class: string, 
	passengerNumber: string
}