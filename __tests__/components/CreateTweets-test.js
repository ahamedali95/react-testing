import React from 'react';
import { shallow } from 'enzyme';
import CreateTweet from '../../src/components/CreateTweet';

const wrapper = shallow(<CreateTweet />);

it('should render without error',() => {
  expect(wrapper.find({ "data-test": "create-tweet-component"}).exists()).toBeTruthy();
});
