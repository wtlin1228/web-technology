import { saveComment } from 'actions/index';
import { SAVE_COMMENT } from 'actions/types';

const COMMENT = 'New comment';

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment();
    
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const action = saveComment(COMMENT);

    expect(action.payload).toEqual(COMMENT);
  })
}) 