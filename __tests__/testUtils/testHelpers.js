import React from 'react';
import { mount, shallow } from 'enzyme';

const setUpWithShallow = (Component, props) => shallow(<Component {...props} />);

const setUpWithMount = (Component, props) => mount(<Component {...props} />);

const findByAttr = (wrapper, attr) => wrapper.find({ 'data-test': attr });

module.exports = {
  setUpWithShallow,
  setUpWithMount,
  findByAttr
};
