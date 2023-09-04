import './App.css';
import React, { Component, createRef } from 'react';
import ExampleViz from './exampleViz.js';
import NewViz from './newViz.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shown: true
    };
  }

  toggleExample = () => {
    this.setState({ shown: !this.state.shown });
  }

  render() {
    return (
      <div className="App">
        <h1>Datamatch Stats Data Visualization Tester</h1>
        <div className="bounding">
          {
            this.state.shown ? <ExampleViz /> : <NewViz />
          }
        </div>
        <button onClick={this.toggleExample}>Toggle</button>
      </div>
    );
  }
}

export default App;