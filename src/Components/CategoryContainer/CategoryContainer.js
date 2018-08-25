import React from 'react';
import './CategoryContainer.css';
import { Card } from '../Card/Card';
import PropTypes from 'prop-types';

export const CategoryContainer = ({ stateArray, currentlyDisplayed, addToFavorites, id }) => {
  
  const cardArray = stateArray.map(item => {
    return (
      <Card
        {...item} 
        id={item.id}
        key={Date.now() * Math.random()}
        currentlyDisplayed = {currentlyDisplayed}
        addToFavorites = {addToFavorites}
      />);
  });

  return (
    <div className="Container">
      {cardArray}
    </div>
  );
};

CategoryContainer.propTypes = {
  stateArray: PropTypes.array,
  currentlyDisplayed: PropTypes.string
};