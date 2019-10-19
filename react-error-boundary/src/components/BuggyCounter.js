import React from 'react';

class BuggyCounter extends React.Component {
  state = {
    counter: 1
  }

  handleClick = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }

  render() {
    if (this.state.counter === 3) {
      throw new Error('I crashed!');
    }

    return (
      <div style={{ border: '2px #000 solid', textAlign: 'center', padding: '20px', background: 'rgb(255, 212, 96)' }}>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleClick}>add 1</button>
      </div>
    );
  }
};

export default BuggyCounter;