import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({name, homeworld, species, population, favorite, terrain, climate, residents, model, carClass, passengerNumber}) => {
	
	return(
		<div className="Card">
			<h2>{name}</h2>
			<button>Fav</button>
		</div>
	)

}

Card.propTypes = {
	name: PropTypes.string,
	homeworld: PropTypes.string, 
	species: PropTypes.string, 
	population: PropTypes.string, 
	favorite: PropTypes.string, 
	terrain: PropTypes.string, 
	climate: PropTypes.string, 
	residents: PropTypes.string, 
	model: PropTypes.string, 
	carClass: PropTypes.string, 
	passengerNumber: PropTypes.string
}