import React, { Component } from 'react';
import './App.css';

import WordGenerator from './components/WordGenerator';


class App extends Component {
  render() {
    return (
      <div className="App">
        <WordGenerator /> 
      </div>
    );
  }
}

export default App;
