import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapper;
const NEW_COMMENT = 'new comment';

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('has a text area and two button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button').length).toEqual(2);
});

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
