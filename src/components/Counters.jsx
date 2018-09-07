import React, { Component } from 'react';
import Counter from './Counter'
import callbacks from '../changes'
import axios from '../__mocks__/axios'

class Counters extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            counters: [this.createCounter()]
        }
    }

    createCounter(initialValue)
    {
        return (
            <Counter initialValue={initialValue} changes={callbacks.changes}>
            </Counter>
        )
    }

    addCounter()
    {
        axios.get().then(data =>
        {
            this.setState((state, props) =>
            {
                return {counters: [...state.counters, this.createCounter(data.initialValue)]}
            });
        });  
    }

    render() {
        return (
            <div>
                <button onClick={this.addCounter.bind(this)}>
                   Add Counter
                </button>
                <span>
                    {this.state.counters.map(counter => counter)}
                </span>
            </div>
        );
    }
}

export default Counters;