import React, { Component } from 'react';
// Will import 2 components: Menu and Board
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialArray: Array(50).fill(Array(50).fill(null))
    }
  }
  test() {
    console.log(this.state.initialArray);
  }
  render() {
    this.test();
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
