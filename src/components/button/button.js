import React, { PropTypes } from 'react';
import './button.css';

const Button = ({text, onClick}) => (
  <button className="button" onClick={ onClick } data-text={ text }>
    <span>{ text }</span>
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

export default Button;
