import React, { Component } from 'react';

class Word extends Component {

    state = {
        wordList: [],
        wordsDownloaded: false
    }

    componentDidMount(){
        const fetchWords = await fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt');
        const words = await fetchWords.text();
        this.setState({wordList: words.split('\n'), wordsDownloaded: true});
    }

    //  fetchWordList = () => {
    //     console.log('clicked');
    // let bob = await fetch('https://raw.githubusercontent.com/dwyl/english-words/master/words.txt')
    //     .then(res => await res.text())
    //     .then(words => this.setState({wordList: words.split('\n'), wordsDownloaded: true}));
    // }

 render(){
    return (
    <div>
        <button onClick={this.fetchWordList}>CLICK TO DOWNLOAD SOME WORDS</button>
        <ul>{(this.state.wordsDownloaded) ? console.log(this.state.wordList)
        : <li>LOADING</li>}
        </ul>
    </div>)
 }
}


export default Word;