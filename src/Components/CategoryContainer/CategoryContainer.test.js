import React from 'react';
import CategoryContainer from './CategoryContainer';
import { shallow } from 'enzyme';

describe('CategoryContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CategoryContainer />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});