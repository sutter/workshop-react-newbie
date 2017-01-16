import React, { PropTypes } from 'react';
import './quote.css';

const Quote = ({ text, author }) => (
  <blockquote className="quote">
    <p className="quote-text">{ text }</p>
    <small className="quote-author">{ author }</small>
  </blockquote>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
