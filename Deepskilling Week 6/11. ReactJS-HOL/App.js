import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  sayHello = () => {
    console.log("Hello React Event");
  }

  handleIncrease = (e) => {
    this.incrementCount();
    this.sayHello();
  }

  decrementCount = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  sayWelcome = (message) => {
    alert(message);
  }

  handlePress = (e) => {
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ margin: '20px' }}>
        <h2>Event Examples Application</h2>
        <div>
          <h3>Counter: {this.state.count}</h3>
          <button onClick={this.handleIncrease}>Increment</button>
          <button onClick={this.decrementCount}>Decrement</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={this.handlePress}>OnPress</button>
        </div>
        <hr style={{ margin: '30px 0' }} />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
