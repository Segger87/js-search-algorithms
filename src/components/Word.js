import React, { Component } from 'react';
import DisplayWord from './displayWord';

class Word extends Component {

    state = {
        wordList: [],
        hasFetched: false,
        randomWord: '',
        generatedRandom: false
    }

   componentWillMount(){
        fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt')
        .then(res => res.text())
        .then(words => this.setState({ wordList: words.split('\n'), hasFetched: true }));
    }

    generateWord = () => {
        const range = this.state.wordList.length;
        const words = [...this.state.wordList];
        let randomNum = Math.floor(Math.random() * range);
        this.setState({randomWord : words[randomNum], generatedRandom: true});
    }

    binarySearch = (wordArray, searchTerm) => {
        
        let front = 0;
        let end = wordArray.length - 1;

        while(front <= end){
            let middle = (front + end) / 2;
            if(wordArray[middle] === searchTerm) {
                return wordArray[middle];
            }
        }
    }

 render(){
    const generateButton = (
        <div>
            <button onClick={this.generateWord}>Generate Random Word</button>
            <DisplayWord 
            data={this.state.wordList} 
            randomWord={this.state.randomWord} 
            clicked={this.state.generatedRandom}/> 
        </div>
    )

    return (
        <div>
            {(this.state.hasFetched) ? generateButton : <p>Loading Please Wait...</p>}
        </div>
    )};
}


export default Word;