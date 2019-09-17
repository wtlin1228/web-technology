# React with Redux Saga

因為可以處理 takeLast, takeEvery 所以很多人直接選用這一套 Redux Middleware

### applyMiddleWare

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers';
import sagas from './sagas';
import App from './components/App';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers, 
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
```

### Sagas

```JavaScript
import _ from 'lodash';
import { put, call, takeEvery, all } from 'redux-saga/effects';
import jsonPlaceholder from '../apis/jsonPlaceholder';

function* fetchPostsAndUsers(action) { 
  // get posts
  const response = yield jsonPlaceholder('/posts');
  yield put({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });

  // get unique userId
  const userIds = _.chain(response.data)
                    .map('userId')
                    .uniq()
                    .value();

  // get users
  for (let id of userIds) {
    yield call(fetchUser, id);
  }
}

function* watchFetchUser(action) { 
  yield call(fetchUser, action.payload.id)
}

function* fetchUser(id) {
  const response = yield jsonPlaceholder(`/users/${id}`);
  yield put({ type: 'FETCH_USER_SUCCESS', payload: response.data });
}


export default function* rootSaga() {
  yield all([
    yield takeEvery('FETCH_USER', watchFetchUser),
    yield takeEvery('FETCH_POSTS_AND_USERS', fetchPostsAndUsers)
  ])
};
```