import React, { Component } from 'react';
import Result from './Result';

import './Numbers.css';

class Numbers extends Component {
  constructor() {
    super();
    this.state = {
      numbers: '',
      results: [],
    };
  }

  handleNumbersOnChange = (e) => {
    const {
      target: { value },
    } = e;

    const numbers = Array.from(value);
    const result = numbers.reduce((a, b) => Number(a) + Number(b), 0);

    this.setState((prevState) => ({
      numbers: value,
      results: [...prevState.results, result],
    }));
  };

  render() {
    return (
      <div className="Numbers">
        <input type="number" value={this.state.numbers} onChange={this.handleNumbersOnChange} />
        <ul>
          {this.state.results.map((result, i) => (
            <Result key={i} result={result} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Numbers;