import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card 
        name="Luke Skywalker"
        species="human"
        homeworld="Tatooine"
        population='200000'
      />
    );
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls addToFavorites when favorite button is clicked', () => {
    const addToFavoritesMock = jest.fn();
    const wrapper = shallow(
      <Card 
        name="Luke Skywalker"
        species="human"
        homeworld="Tatooine"
        population='200000'
        addToFavorite={addToFavoritesMock}
      />
    );
    wrapper.find('button').simulate('click');
    expect(addToFavoritesMock).toHaveBeenCalled();
  });

});