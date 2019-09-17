export const fetchPostsAndUsers = () => {
  return {
    type: 'FETCH_POSTS_AND_USERS',
    payload: {}
  }
}

export const fetchUser = id => {
  return {
    type: 'FETCH_USER',
    payload: { id }
  }
}