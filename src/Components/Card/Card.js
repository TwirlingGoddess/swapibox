import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

export const Card = ({
  name, 
  species, 
  homeworld, 
  population, 
  terrain, 
  climate, 
  favorite,
  residents, 
  model, 
  vehicleClass, 
  passengers, 
  addToFavorites, 
  id, 
  type}) => {
    
  if (type === 'people') { 
    return (
      <div className="Card people">
        <h4>{name}</h4>
        <hr/>
        <h5>SPECIES: {species}</h5>
        <h5>HOMEWORLD: {homeworld}</h5>
        <h5>POPULATION: {population}</h5>
        <button 
          value = 'people'
          onClick = {() => addToFavorites(id)}
          className={favorite ? "true" : null}
        > Fave</button>
      </div>
    );
  }

  if (type ==='planets') {
    return (
      <div className="Card planets">
        <h4>{name}</h4>
        <hr/>
        <h5>TERRAIN: {terrain}</h5>
        <h5>POPULATION: {population}</h5>
        <h5>CLIMATE: {climate}</h5>
        <h5>RESIDENTS: {residents}</h5>
        <button 
          onClick = {() => addToFavorites(id)} 
          value = 'people'
          className={favorite ? "true" : null}
        > Fave</button>
      </div>
    );
  }

  if (type === 'vehicles') {
    return (
      <div className="Card vehicles">
        <h4>{name}</h4>
        <hr/>
        <h5>MODEL: {model}</h5>
        <h5>CLASS: {vehicleClass}</h5>
        <h5>PASSENGERS: {passengers}</h5>
        <button 
          onClick = {() => addToFavorites(id)} 
          value = 'vehicles'
          className={favorite ? "true" : null}
        > Fav</button>
      </div>
    );
  }

  if (type === 'error') {
    return (
      <div className="Card">
        <h1>{name}</h1>
      </div>
    );
  }
}; 

Card.propTypes = {
  name: PropTypes.string,
  homeworld: PropTypes.string, 
  species: PropTypes.string, 
  population: PropTypes.string, 
  favorite: PropTypes.string, 
  terrain: PropTypes.string, 
  climate: PropTypes.string, 
  residents: PropTypes.array, 
  model: PropTypes.string, 
  vehicleClass: PropTypes.string, 
  passengers: PropTypes.string,
  type: PropTypes.string,
  addToFavorites: PropTypes.func
};