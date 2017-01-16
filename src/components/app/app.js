import React, { Component } from 'react';
import quoteData from '../../data/quote.const';
import Quote from '../quote/quote';
import Button from '../button/button';
import './app.css';

class App extends Component {

  state = {
    quote: {
      text: undefined,
      author: undefined,
    }
  };

  componentWillMount() {
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * quoteData.length);
    if (this.state.quote.text === quoteData[randomNumber].text) {
      this.getRandomQuote();
      return;
    }
    this.setState({
      quote: quoteData[randomNumber]
    });
  };

  render() {
    return (
      <div className="app">
        <div className="app-main">
          <Quote
            text={ this.state.quote.text }
            author={ this.state.quote.author }
          />
        </div>
        <div className="app-footer">
          <Button
            text="Autre citation"
            onClick={ e => this.getRandomQuote() }
          />
        </div>
      </div>
    );
  }
}

export default App;
