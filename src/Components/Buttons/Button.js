import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button 
      value={props.value} 
      onClick={props.populateCards} 
    >
      {props.value} <aside>{props.counter}</aside>
    </button>
  );
};

export default Button;

Button.propTypes = {
  value: PropTypes.string,
  populateCards: PropTypes.func
};