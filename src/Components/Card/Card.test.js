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

  it('should have the text of name in the h4', () => {
    const expected = <h4>'Luke Skywalker'</h4>;
    expect(wrapper.contains(expected)).toEqual(true);
  });

  it('has the class of favorite if the favorite prop is true', () => {
    wrapper = shallow(
      <Card 
        name="Luke Skywalker"
        species="human"
        homeworld="Tatooine"
        population='200000'
        favorite={true}
      />
    );
    expect(wrapper.is('.favorite')).toEqual(true);
  });

  it('doesn\'t have the class of favorite if the favorite prop is false', () => {
    wrapper = shallow(
      <Card 
        name="Luke Skywalker"
        species="human"
        homeworld="Tatooine"
        population='200000'
        favorite={true}
      />
    );
    expect(wrapper.is('.favorite')).toEqual(false);
  });

  it('calls addToFavorites when favorite button is clicked', () => {
    const addToFavoritesMock = jest.fn();
    const wrapper =  wrapper = shallow(
      <Card 
        name="Luke Skywalker"
        species="human"
        homeworld="Tatooine"
        population='200000'
        favorite={true}
        addToFavorite={addToFavoritesMock}
      />
    );
    wrapper.find('button').simulate('click');
    expect(addToFavoritesMock).toHaveBeenCalled();
  });

});