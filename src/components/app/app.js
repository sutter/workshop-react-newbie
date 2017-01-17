import React, { Component } from 'react';
import quoteData from '../../data/quote.const';
import Quote from '../quote/quote';
import Button from '../button/button';
import './app.css';

let unusedQuotes = quoteData;

class App extends Component {

  state = {
    quote: {
      text: undefined,
      author: undefined,
    },
    cta: true,
  };

  componentWillMount() {
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    let randomNumber = Math.floor(Math.random() * unusedQuotes.length);

    if ( unusedQuotes.length ) {
      this.setState({
        quote: unusedQuotes[randomNumber]
      });
    } else {
      this.setState({
        cta: false
      });
      return;
    }

    unusedQuotes.map(function(quote, index) {
      return quote.key = index;
    });

    const getRemainingQuotes = quote => {
      return quote.key !== randomNumber;
    };
    unusedQuotes = unusedQuotes.filter(getRemainingQuotes);
  };

  render() {
    const showCta = this.state.cta;

    let cta = null;
    if (showCta) {
      cta = <Button
        text="Autre citation"
        onClick={ e => this.getRandomQuote() }
      />
    }

    return (
      <div className="app">
        <div className="app-main">
          <Quote
            text={ this.state.quote.text }
            author={ this.state.quote.author }
          />
        </div>
        <div className="app-footer">
          { cta }
        </div>
      </div>
    );
  }
}

export default App;
