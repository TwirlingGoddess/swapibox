import React from 'react';
import { CategoryContainer } from './CategoryContainer';
import { shallow } from 'enzyme';

describe('CategoryContainer', () => {
  let wrapper;
  let mockCardsList;
  let mockToggleFavorite;

  beforeEach(() => {
    mockToggleFavorite = jest.fn();
    mockCardsList = [{name: 'Luke Skywalker', species: 'human', homeworld: 'Tatooine', population: '200000'}, 
                    {name: 'Leia Organa', species: 'human', homeworld: 'Alderaan', population: '2000000000'}]
    wrapper = shallow(<CategoryContainer />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('has the correct number of groceries', () => {
    wrapper = shallow(
      <Card
        item={[
          {name: 'Luke Skywalker', species: 'human', homeworld: 'Tatooine', population: '200000'},
          {name: 'Leia Organa', species: 'human', homeworld: 'Alderaan', population: '2000000000'}
        ]}
      />
    );

    expect(wrapper.find('Card').length).toEqual(2);
  });

describe('toggleFavorite', () => {

  it('triggers toggleFavorite when clicked', () => {
    const wrapper = mount(
      <Card
        item={[
          {name: 'Luke Skywalker', species: 'human', homeworld: 'Tatooine', population: '200000'},
          {name: 'Leia Organa', species: 'human', homeworld: 'Alderaan', population: '2000000000'}
        ]}
      />
    );
    wrapper.find('.Card').simulate('click');
    expect(mockToggleFavorite).toBeCalled();
  });
});