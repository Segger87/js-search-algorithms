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

    executeSearches = () => {
        this.executeBinary();
        this.executeLinear();
        console.log(this.state)
    }

    executeLinear = () => {
        let result = linearSearch(this.props.data, this.props.randomWord);
        let linearResult = {comparisons: result, word: this.props.randomWord};
        let bar = this.state.linear.concat(linearResult)
        this.setState({linear: bar});
       alert(`Using Linear search the word ${this.props.randomWord} took ${result} comparisons to find`)
    }

    executeBinary = () => {
       let result = binarySearch(this.props.data, this.props.randomWord);
       let binaryResult = {comparisons: result, word: this.props.randomWord};
       let bar = this.state.binary.concat(binaryResult);
       this.setState({binary: bar})
       alert(`Using Binary search the word ${this.props.randomWord} took ${result.count} comparisons to find`)
    }

    render(){
        const displayRandWord = 
        (<div>
            <p>Random word is {this.props.randomWord}</p>
            <button className={classes.Button} onClick={this.executeSearches}>Perform Search</button>
            <MyChart linear={this.state.linear} binary={this.state.binary}/>
        </div>
        );

        return (
        <div className={classes.Background}>
            {(this.props.clicked) ? displayRandWord : <p>Waiting for that click bro</p>}
        </div>);
    }
}

export default ExecuteSearches;