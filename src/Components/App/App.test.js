import React from 'react';
import App from './App';
import CategoryContainer from '../CategoryContainer/CategoryContainer';
import { shallow} from 'enzyme';

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
    const spy = jest.spyOn(wrapper.instance(), 'mockPopulate');
    wrapper.instance().forceUpdate();
    const mockEvent = { target: {value: {
      homeworld: "Tatooine",
      id: 1135694282614.0696,
      name: "Luke Skywalker",
      population: "200000",
      species: "Human",
      type: "people" }}};
    wrapper.find('.button-box').simulate('click', mockEvent);
    expect(spy).toHaveBeenCalled();
  });

  it('should render the category container with the correct props', () => {
    expect(wrapper.find(CategoryContainer).prop('stateArray')).toEqual([]);
    expect(wrapper.find(CategoryContainer).prop('addToFavorites'))
      .toEqual(wrapper.instance().addToFavorites);
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
    const mockInput = [{
      name: "Luke Skywalker",
      species: "https://swapi.co/api/species/1/",
      homeworld: "https://swapi.co/api/planets/1/"
    }];
    expected = [{
      homeworld: "Tatooine",
      id: 1135694282614.0696,
      name: "Luke Skywalker",
      population: "200000",
      species: "Human",
      type: "people" }];
    wrapper.instance().filterPeople();
    expect(filterPeople).toHaveBeenCalledWith(mockInput);
    expect(wrapper.state('people')).toEqual(expected);
  });

  it('should return an array of planets when filterPlanets is invoked', () => {
    const mockInput = [{
      climate: "temperate",
      name: "Alderaan",
      population: "2000000000",
      residents: [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"],
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
        "Raymus Antilles"],
      terrain: "grasslands, mountains",
      type: "planets" }];
    wrapper.instance().filterPlanets().toHaveBeenCalledWith(mockInput);
    expect(wrapper.state('planets')).toEqual(expected);
  });

  it('should return an array of vehicles when filterVehicles is invoked', 
    () => {
      const mockInput = [{
        name: "Sand Crawler",
        passengers: "30",
        vehicleClass: "wheeled",
        model: "Digger Crawler"
      }];
      expected = [{
        id: 105989059159.61761,
        model: "Digger Crawler",
        name: "Sand Crawler",
        passengers: "30",
        type: "vehicles",
        vehicleClass: "wheeled" }];
      wrapper.instance().filterVehicles(mockInput);
      expect(filterVehicles).toHaveBeenCalledWith(mockInput);
      expect(wrapper.state('vehicles')).toEqual(expected);
    });

  it('should update state when removeLanding function is invoked', () => {
    expected = false;
    wrapper.find('.landing').simulate('click');
    expect(removeLanding).toHaveBeenCalled();
    expect(wrapper.state('landing')).toEqual(expected);
  });

  it.only('should update state when addToFavorites is invoked', () => {
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
    const initialState = [
      {
        id: 105989059159.61761,
        model: "Digger Crawler",
        name: "Sand Crawler",
        passengers: "30",
        type: "vehicles",
        vehicleClass: "wheeled" 
      }, 
      {
        id: 105989059159.61761,
        model: "Digger Crawler",
        name: "Sand Crawler",
        passengers: "30",
        type: "vehicles",
        vehicleClass: "wheeled" 
      }
    ];
    expected = [];
    wrapper.setState({ favorites: initialState });
    wrapper.instance().checkDuplicate(mockParam);
    expect(checkDuplicate).toHaveBeenCalledWith(mockParam);
    expect(wrapper.state(favorites)).toEqual(expected);
  });

  it('should invoke displayFavorites when a favorites button is pressed', () => {
    wrapper.find('.button-box').simulate('click');
    wrapper.instance().displayFavorites();
    expect(displayFavorites).toHaveBeenCalled();
  });

  it('should update state when displayFavorites is invoked and favorites array is empty', () => {
    const initialState = [];
    expected = [{
      "name": "YOU HAVE NO FAVORITES",
      "type": "error" 
    }];
    wrapper.setState({ favorites: initialState });
    wrapper.instance().displayFavorites();
    expect(wrapper.state('displayedCards')).toEqual(expected);
  });
});





