import React, { PropTypes } from 'react';
import './quote.css';

const Quote = ({text, author}) => (
  <div className="quote">
    <div className="quote-text">{ text }</div>
    <div className="quote-author">{ author }</div>
  </div>
);

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
