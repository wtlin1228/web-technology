# React with Redux Thunk

使用 redux middle - redux-thunk

### Some Note

流程：Action Creator → Action → Dispatch → **Middleware** → Reducers → State

這個專案用到的 Redux Middleware 是 redux-thunk

redux-thunk 可以做的事情：
1. 回傳 Action Object（就像原本的 Redux 用法一樣）
2. 回傳 functions

### redux-thunk 設定方式

```JavaScript
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
```

### Reducers 回傳 state 應該使用這些方式

原因是因為，redux 會判斷 reducers 回傳的 new state === old state，如果是 true，那麼 redux 就不會去發更新通知

Removing an element from an array:
`state.pop()` -> `state.filter(element => element !== 'hi')`

Adding an element to an array:
`state.push('hi')` -> `[...state, 'hi']`

Replacing an element in an array:
`state[0] = 'hi'` -> `state.map(element => element === 'hi' : 'bye' ? element`

Updating a property in an object:
`state.name = 'Sam'` -> `{...state, name: 'Sam'}`

Adding a property to an object:
`state.age = 30` -> `{...state, age: 30}`

Removing a property from an object:
`delete state.name` -> `{...state, age: undefined} or `_.omit(state, 'age')

### 使用 lodash memoize 來優化效能

```JavaScript
function getUser(id) {
  console.log('get user', id);
  fetch(id);
}

const memoizeGetUser = _.memoize(getUser);
memoizeGetUser(1);
memoizeGetUser(1); // will not call the fetch
memoizeGetUser(1); // will not call the fetch
memoizeGetUser(2); // will call the fetch
```

### 使用 lodash chain

```JavaScript
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  userIds.forEach(id => dispatch(fetchUser(id)));

  // 上面的程式碼可以被轉換成下面的

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
```

### 參考連結

https://jsonplaceholder.typicode.com/
