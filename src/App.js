import React, { Component } from 'react';
import generator from './numberGenerator';
import Counters from './components/Counters';
import callbacks from './changes';

class App extends Component {
  render() {
    return (
      <div>
        <Counters/>
      </div>
    );
  }
}

export default App;
