import React, { Component } from 'react';


class Counter extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            count: this.props.initialValue
        }
    }
    
    handleClick(change)
    {
        this.setState((state, props) => {
            return {count: change(state.count)}
        });
    }

    render() {
      return (
        <div>
            {
                this.props.changes.map(change => 
                    <div>
                        <button onClick={() => this.handleClick(change.callback)}>
                            {change.name}
                        </button>
                    </div>
            )}
            <p>
                {this.state.count}
            </p>
        </div>
      );
    }
  }
  
  export default Counter;