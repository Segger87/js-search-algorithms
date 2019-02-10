import React, { Component } from 'react';
import ExecuteSearches from './ExecutedSearches';
import classes from './word-style.module.css';

class WordGenerator extends Component {

    state = {
        wordList: [],
        hasFetched: false,
        randomWord: '',
        hasRandom: false
    }

   componentWillMount(){
        fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt')
        .then(res => res.text())
        .then(words => this.setState({ wordList: words.split('\n').sort(), hasFetched: true }));
    }

    generateWord = () => {
        const words = [...this.state.wordList];
        const range = words.length;
  
        let randomNum = Math.floor(Math.random() * range);
        this.setState({randomWord : words[randomNum], hasRandom: true});
    }

 render(){
    const generateButton = (
        <div>
            <button className={classes.ButtonMain} onClick={this.generateWord}>Generate Random Word</button>
            <ExecuteSearches 
            data={this.state.wordList} 
            randomWord={this.state.randomWord} 
            clicked={this.state.hasRandom}/> 
        </div>
    )

    return (
        <div className={classes.Background}>
            {(this.state.hasFetched) ? generateButton : <p>Loading Please Wait...</p>}
        </div>
    )};
}


export default WordGenerator;