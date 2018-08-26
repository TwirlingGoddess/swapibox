import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Button 
        value={props.value} 
        onClick={props.populateCards} 
      />
    )
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
});

