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
        linear: [],
        binary: []
    }

    executeLinear = () => {
        let result = linearSearch(this.props.data, this.props.randomWord);
        let linearResult = {comparisons: result, word: this.props.randomWord};
        let bar = this.state.linear.concat(linearResult)
        this.setState({linear: bar});
        console.log(this.state)
       alert(`Using Linear search the word is at position ${result.position} in the array and took ${result.count} comparisons`)
    }

    executeBinary = () => {
       let result = binarySearch(this.props.data, this.props.randomWord);
       let binaryResult = {comparisons: result, word: this.props.randomWord};
       let bar = this.state.binary.concat(binaryResult);
       this.setState({binary: bar})
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
        </div>);
    }
}

export default ExecuteSearches;