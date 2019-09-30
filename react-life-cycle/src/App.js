import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    
    console.log('constructor');

    // 可以在這裡宣告 Ref

    // 可以在這裡初始化 state

    // 不可以在這裡用 setState

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    
    // 可以在這裡拿資料

    // 可以在這裡監聽事件

    // 可以在這邊用 setState，不過最好能在初始化的時候就先設定好初始 state，可以避免效能的問題，因為會 render 兩次
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);

    // 可以回傳一個物件，這個物件會用來更新 state，像是下面這行，會造成每次 render 的 count 都是 5，因為
    // getDerivedStateFromProps 會在 render 前被呼叫
    // return {count: 5}

    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);

    // 如果 return false 就不會重新渲染，而且也不會呼叫 componentDidUpdate，因為沒有 update 發生，很合理

    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot);

    // 可以在這裡拿資料

    // 可以在這裡用 setState，不過要加上條件，不然就會造成無窮迴圈
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');

    // 可以在這裡取消監聽事件
  }

  render() {
    return (
      <div>
        <button onClick={() => {this.setState({ count: this.state.count + 1 })}}>increase 1</button>
        <button onClick={() => {this.setState({ count: this.state.count - 1 })}}>decrease 1</button>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

export default App;