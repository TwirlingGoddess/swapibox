import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button 
      value={props.value} 
      onClick={props.populateCards}
      className={props.className}
    >
      {props.value} <aside>{props.counter}</aside>
    </button>
  );
};

export default Button;

Button.propTypes = {
  value: PropTypes.string,
  populateCards: PropTypes.func,
  counter: PropTypes.number
};