import React from 'react';
import { CategoryContainer } from './CategoryContainer';
import { Card } from '../Card/Card';
import { shallow } from 'enzyme';

describe('CategoryContainer', () => {
  let wrapper;
  let mockCardsList;
  let mockToggleFavorite;

  beforeEach(() => {
    mockToggleFavorite = jest.fn();
    mockCardsList = [{name: 'Luke Skywalker', species: 'human', homeworld: 'Tatooine', population: '200000'}, 
                    {name: 'Leia Organa', species: 'human', homeworld: 'Alderaan', population: '2000000000'}]
    wrapper = shallow(<CategoryContainer stateArray={mockCardsList} />);
  });

  
  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('renders the correct number of cards', () => {
    expect(wrapper.find('.Container').length).toEqual(1);
  });

  it('triggers toggleFavorite when clicked', () => {
    wrapper.find('.faveButton').simulate('click');
    expect(mockToggleFavorite).toHaveBeenCalled();
  });

})
