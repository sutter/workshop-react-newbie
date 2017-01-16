import React, { Component } from 'react';
import quoteData from '../../data/quote.const';
import Quote from '../quote/quote'
import './app.css';

class App extends Component {

  state = {
    quote: quoteData[0]
  };

  render() {
    return (
      <div className="app">
        <Quote
          text={ this.state.quote.text }
          author={ this.state.quote.author }
        />
      </div>
    );
  }
}

export default App;
