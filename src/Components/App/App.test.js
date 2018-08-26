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
    // Date.now() * Math.random() = jest.fn().mockImplementation(() => 1135694282614.0696);
    wrapper.setState({ displayedCards: initialState });
    wrapper.instance().populateCards(mockCategory);
    expect(wrapper.state('displayedCards')).toEqual(expected);
    expect(wrapper.state('displayedCards').length).toEqual(1);
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
    expect(wrapper.state('vehicles')).toEqual(expected);
  });

  it('should update state when removeLanding function is invoked', () => {
    const initialState = true;
    expected = false;
    wrapper.find('.fade').simulate('click');
    expect(removeLanding).toHaveBeenCalled();
    expect(wrapper.state('landing')).toEqual(expected);
  });

  it('should update state when addToFavorites is invoked', () => {
    const initialState = [];
    const mockFavorite = [{
      id: 105989059159.61761,
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30",
      type: "vehicles",
      vehicleClass: "wheeled" }];

    expected = [{
      id: 105989059159.61761,
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30",
      type: "vehicles",
      vehicleClass: "wheeled" }];
    wrapper.setState({ favorites: initialState });
    wrapper.instance().addToFavorites(mockFavorite);
    expect(wrapper.state('favorites')).toEqual(expected);
    expect(wrapper.state('favorites').length).toEqual(1);
  });

  it('should check the state of favorites for duplicates when checkDuplicates is invoked', () => {
    const mockParam = "Sand Crawler";
    const initialState = [{
      id: 105989059159.61761,
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30",
      type: "vehicles",
      vehicleClass: "wheeled" }, {
      id: 105989059159.61761,
      model: "Digger Crawler",
      name: "Sand Crawler",
      passengers: "30",
      type: "vehicles",
      vehicleClass: "wheeled" }]];
    expected = [];
    wrapper.setState({ favorites: initialState });
    wrapper.instance().checkDuplicates(mockParam);
    expect(checkDuplicates).toHaveBeenCalledWith(mockParam);
    expect(wrapper.state(favorites)).toEqual(expected);
  });

  it('should invoke displayFavorites when a favorites button is pressed', () => {
    wrapper.find('.button-box').simulate('click');
    expect(displayFavorites).toHaveBeenCalled();
  });

  it('should update state when displayFavorites is invoked', () => {
    const initialState = [];
    expected = [{
      homeworld: "Tatooine",
      id: 1135694282614.0696,
      name: "Luke Skywalker",
      population: "200000",
      species: "Human",
      type: "people" }]
    wrapper.setState({ favorites: initialState });
    wrapper.instance().displayFavorites();
    expect(wrapper.state(displayedCards)).toEqual(expected);
  });
});





