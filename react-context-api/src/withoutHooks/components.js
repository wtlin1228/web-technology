import React, { createContext } from 'react';

// createContext 會回傳 Provider & Consumer
const NameContext = createContext()

class A extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      name: 'Billy Shakespeare',
    }
  }

  render() {
    return (
      <NameContext.Provider value={this.state.name}>
        <B />
      </NameContext.Provider>
    );
  }
}

class B extends React.Component { 
  render() {
    return (
      <section className="b">
        <C />
      </section>
    );
  }
}

class C extends React.Component { 
  render() {
    return (
      <section className="c">
        <D />
      </section>
    );
  }
}

// Consumer 裡面要放一個 function，
// 這個 function 的參數就會是 context 的 value。
class D extends React.Component { 
  render() {
    return (
      <NameContext.Consumer>
        {
          name => <button>{name}</button>
        }
      </NameContext.Consumer>
    );
  }
}



export default A;