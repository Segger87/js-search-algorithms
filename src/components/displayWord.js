import React, { Component } from 'react';

class displayWord extends Component {
    constructor(props){
        super();
    }

    render(){
        const displayRandWord = 
        (<div>
            <p>Random word is {this.props.randomWord}</p>
            <button>Binary</button>
            <button>Linear</button>
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