import React, { Component } from 'react';
import { linearSearch } from './searches/linear';
import { binarySearch } from './searches/binary';
import classes from './word-style.module.css'
import MyChart from './graph/graph';

class ExecuteSearches extends Component {
    constructor(props){
        super();
    }

    state = {
        linear: []
    }

    executeLinear = () => {
        let result = linearSearch(this.props.data, this.props.randomWord);
        let foo = { comparisons: result, word: this.props.randomWord};
        console.log(foo)
        let bar = this.state.linear.concat(foo)
        this.setState({linear: bar});
        console.log(this.props.randomWord)
        console.log(this.state)
       alert(`Using Linear search the word is at position ${result.position} in the array and took ${result.count} comparisons`)
    }

    executeBinary = () => {
       let result = binarySearch(this.props.data, this.props.randomWord);
       alert(`Using Binary search the word is at position ${result.position} in the array and took ${result.count} comparisons`)
    }

    render(){
        const displayRandWord = 
        (<div>
            <p>Random word is {this.props.randomWord}</p>
            <button className={classes.Button} onClick={this.executeBinary}>Binary</button>
            <button className={classes.Button} onClick={this.executeLinear}>Linear</button>
            <MyChart />
        </div>
        );

        return (
        <div className={classes.Background}>
            {(this.props.clicked) ? displayRandWord : <p>Waiting for that click bro</p>}
            {/* <ul>
            {this.props.data.map(word => (
                <li key={word}>{word}</li>
                ))};
            </ul> */}
        </div>);
    }
}

export default ExecuteSearches;