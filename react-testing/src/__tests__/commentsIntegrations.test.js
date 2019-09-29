import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

let wrapper;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  });

  wrapper = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  wrapper.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find('li').length).toEqual(2);

    done();
  });
});