import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import quoteData from './data/quote.const';
import './index.css';

class App extends Component {

  state = {
    quote: quoteData[0]
  };

  render() {
    return (
      <div className="app">
        <div className="quote">
          <div className="quote-text">
            { this.state.quote.text }
          </div>
          <div className="quote-author">
            { this.state.quote.author }
          </div>
        </div>

      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
