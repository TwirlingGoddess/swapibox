import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  let expected;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke populateCards when a button is pressed', () => {
    let mockPopulate = jest.fn();
    wrapper.find('.button-box').simulate('click');
    expect().toHaveBeenCalled();
  });

  it('should render the category container with the correct props', () => {
    expect(wrapper.find(CategoryContainer).prop('stateArray')).toEqual([]);
    expect(wrapper.find(CategoryContainer).prop('addToFavorites')).toEqual(wrapper.instance().addToFavorites);
  });

  it('should update state when populateCards is invoked', () => {
    const initialState = [];
    const mockCategory = {
      homeworld: "Tatooine",
      id: 1135694282614.0696,
      name: "Luke Skywalker",
      population: "200000",
      species: "Human",
      type: "people" };
    expected = [{
      homeworld: "Tatooine",
      id: 1135694282614.0696,
      name: "Luke Skywalker",
      population: "200000",
      species: "Human",
      type: "people" }];
    Date.now() * Math.random() = jest.fn().mockImplementation(() => 1135694282614.0696);
    wrapper.setState({ people: initialState });
    wrapper.instance().populateCards(mockCategory);
    expect(wrapper.state('people')).toEqual(expected);
    expect(wrapper.state('people').length).toEqual(1);
  });

  it('should return an array of people when filterPeople is invoked', () => {
    mockInput = [{
      name: "Luke Skywalker",
      species: "https://swapi.co/api/species/1/",
      homeworld: "https://swapi.co/api/planets/1/",
    }];
    expected = [{
      homeworld: "Tatooine",
      id: 1135694282614.0696,
      name: "Luke Skywalker",
      population: "200000",
      species: "Human",
      type: "people" }];
    expect.instance().filterPeople().toHaveBeenCalledWith(mockInput);
    expect(wrapper.state('people')).toEqual(expected)
  });

  it('should return an array of planets when filterPlanets is invoked', () => {
    mockInput = [{
      climate: "temperate",
      name: "Alderaan",
      population: "2000000000",
      residents: [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/" ],
      terrain: "grasslands, mountains"
    }];
    expected = [{
      climate: "temperate",
      id: 1410520490424.7056,
      name: "Alderaan",
      population: "2000000000",
      residents: [
        "Leia Organa",
        "Bail Prestor Organa",
        "Raymus Antilles" ],
      terrain: "grasslands, mountains",
      type: "planets" }];
    expect.instance().filterPlanets().toHaveBeenCalledWith(mockInput);
    expect(wrapper.state('planets')).toEqual(expected)
  });

  it('should return an array of vehicles when filterVehicles is invoked', () => {
    mockInput = [{
      name: "Sand Crawler",
      passengers: "30",
      vehicle_class: "wheeled",
      model: "Digger Crawler",
    }];
    expected = [{
      id: 105989059159.61761,
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30",
      type: "vehicles",
      vehicleClass: "wheeled" }];
    expect.instance().filterVehicles().toHaveBeenCalledWith(mockInput);
    expect(wrapper.state('vehicles')).toEqual(expected)
  });






  it('should invoke displayFavorites when a favorites button is pressed', () => {
    wrapper.find('.button-box').simulate('click')
    expect(displayFavorites).toHaveBeenCalled()
  })

});





