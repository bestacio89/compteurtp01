import React, { Component } from 'react';
import Counter from './Counter';
import './App.css';
import background from './background.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.onClickAdd = this.onClickAdd.bind(this);
    this.onClickSubtract = this.onClickSubtract.bind(this);
  }

  onClickAdd() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  onClickSubtract() {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div className="app">
      
        <Counter 
          count={this.state.count} 
          onClickAdd={this.onClickAdd} 
          onClickSubtract={this.onClickSubtract} 
        />
      </div>
    );
  }
}

export default App;
