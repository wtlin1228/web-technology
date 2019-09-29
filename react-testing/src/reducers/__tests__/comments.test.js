import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

const COMMENT = 'NEW COMMENT';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: COMMENT
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual([COMMENT]);
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
}) 

