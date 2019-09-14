import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import CreateTweet from '../../src/components/CreateTweet';

const wrapper = shallow(<CreateTweet />);
it('lol',() => {
  expect(wrapper.find({ "data-test": "create-tweet-component"}).exists()).toBeTruthy();
});
