# React Testing

### Enzyme API

+ Static: Render the given component and return plain HTML
+ Shallow: Render just the given component and none of its children
+ Full DOM: Render the component and all of its children + let us modify it afterwards

### beforeEach
如果需要在每個 test 裡面都先做一樣的事情，例如 render 一個 component

可以使用 `beforeEach`
```JavaScript
let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
```

### describe
如果在多個 `it` 需要做同樣的事情，可以利用 `describe` 來將 `it` 們包起來，然後在 `describe` 底下使用 `beforeEach` 

```JavaScript
describe('the text area', () => {
  beforeEach(() => {
    wrapper.find('textarea').simulate('change', { 
      target: { value: NEW_COMMENT } 
    });
    wrapper.update();
  });

  it('has a text area that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual(NEW_COMMENT);
  });
  
  it('has empty text area after submit', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
  });
});
```

### Re Render 的問題
在 `react` 裡面，只要呼叫 `setState` 過後就會重新 `render`，但是在 test 中，需要自己去做這件事，可以利用 `update()` 來做到

```JavaScript
wrapper.update();
```

### 觸發 Event 的方法
可以使用 `simulate()` 來觸發事件，如果需要傳值進去的話，在第二個參數寫的 `object` 會被 merge 到 event 當中

```JavaScript
wrapper.find('textarea').simulate('change', { 
  target: { value: NEW_COMMENT } 
});
```

### 加上 redux 之後要怎麼測試呢

原本的 `export default Something`，
加上 `redux` 後變成 `export default connect()(Something)`，這會造成 test 出現錯誤，原因是：沒有 `Provider` 包住他

解決方法 1：

```JavaScript
beforeEach(() => {
  wrapper = mount(<CommentBox />);
});
```

改成

```JavaScript
beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <CommentBox />
    </Provider>
  );
});
```

這樣會造成一個問題，只要我們一改 `redux` 的設定方式，或是加上了 `middleware`，就需要去每一個有使用到 `connect` 的 `component` 的 test 去改設定。

解決方法 2：

直接將 Redux 的設定邏輯寫在一個新的 Component 中

```JavaScript
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

export default props => {
  return (
    <Provider store={createStore(reducers, {})}>
      {props.children}
    </Provider>
  );
};
```

然後 `index.js` 還有 test 都可以直接 import Root 來使用，這個方法比較好

### 測試 redux 拿取 store 裡面的值的方法

可以在 Root 裡面傳一個 initState 當 props 來做到這件事情

```JavaScript
beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  };

  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList/>
    </Root>
  );
});
```

### 測試 api call 的方法

這是因為 jest 是用 JS DOM 來模擬 Browser DOM，所以並不是真實的 Browser 環境。
這時候可以利用 `moxios` 來監控 `axios` 發出的請求，然後假裝是 API server 回應 `axios`。

設定 `moxios`
```JavaScript
import moxios from 'moxios';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });
}

afterEach(() => {
  moxios.uninstall();
});
```

這樣還會有一個問題，就是 `jest` 是同步進行的，所以 `jest` 一行一行的連續執行下來，這時候 `moxios` 還沒有把資料餵給 `axios`，就會造成錯誤。
所以可以用傳統的 `setTimeout` 來設個 `delay`，然後可以用 `done` 來告訴 `jest` 這個測試已經完成了，不過，這並不是最好的方法。
```JavaScript
it('can fetch a list of comments and display them', (done) => {
  wrapper.find('.fetch-comments').simulate('click');

  setTimeout(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);

    done();
  }, 100);
});
```

最好的方法是直接使用 `moxios.wait`
```JavaScript
it('can fetch a list of comments and display them', (done) => {
  wrapper.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);

    done();
  });
});
```

### 收集連結
+ https://airbnb.io/enzyme/
+ https://create-react-app.dev/docs/importing-a-component#absolute-imports