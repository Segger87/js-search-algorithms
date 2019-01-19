import React, { Component } from 'react';
import { linearSearch } from './searches/linear';
import { binarySearch } from './searches/binary';

class displayWord extends Component {
    constructor(props){
        super();
    }

    executeLinear = () => {
        let result = linearSearch(this.props.data, this.props.randomWord);
        console.log(result + 'result bro');
    }

    executeBinary = () => {
        let result = binarySearch(this.props.data, this.props.randomWord);
        console.log(result + 'binary');
    }

    render(){
        const displayRandWord = 
        (<div>
            <p>Random word is {this.props.randomWord}</p>
            <button onClick={this.executeBinary}>Binary</button>
            <button onClick={this.executeLinear}>Linear</button>
        </div>
        );

        return (
        <div>
            {(this.props.clicked) ?  displayRandWord : <p>Waiting for that click bro</p>}
            <ul>
            {this.props.data.map(word => (
                <li key={word}>{word}</li>
                ))};
            </ul>
        </div>);
    }
}

export default displayWord;