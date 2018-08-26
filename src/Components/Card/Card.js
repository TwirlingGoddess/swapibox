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
  residents, 
  model, 
  vehicleClass, 
  passengers, 
  addToFavorites, 
  id, 
  type}) => {
    
  if (type === 'people') { 
    return (
      <div className="Card">
        <h4>{name}</h4>
        <hr/>
        <h5>Species: {species}</h5>
        <h5>Homeworld: {homeworld}</h5>
        <h5>Popuation: {population}</h5>
        <button 
          value = 'people'
          onClick = {() => addToFavorites(id)}
        > Fav
        </button>
      </div>
    );
  }

  if (type ==='planets') {
    return (
      <div className="Card">
        <h4>{name}</h4>
        <hr/>
        <h5>Terrain: {terrain}</h5>
        <h5>Population: {population}</h5>
        <h5>Climate: {climate}</h5>
        <h5>Residents: {residents}</h5>
        <button 
          onClick = {() => addToFavorites(id)} 
          value = 'people'
        > Fav</button>
      </div>
    );
  }

  if (type === 'vehicles') {
    return (
      <div className="Card">
        <h4>{name}</h4>
        <hr/>
        <h5>Model: {model}</h5>
        <h5>Class: {vehicleClass}</h5>
        <h5>Passengers: {passengers}</h5>
        <button 
          onClick = {() => addToFavorites(id)} 
          value = 'vehicles'
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