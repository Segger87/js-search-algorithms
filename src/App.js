import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import downloadWords from './api/fetch-words';
import Word from './components/Word';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Word />
      </div>
    );
  }
}

export default App;
