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