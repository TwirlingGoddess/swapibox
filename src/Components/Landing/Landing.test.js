import React from 'react';
import Landing from './Landing';
import { shallow } from 'enzyme';

describe('Landing', () => {
  let wrapper;
  let mockScroll;
  let mockState;
  let mockEvent;

  beforeEach(() => {
    wrapper = shallow(<Landing />);
    mockEvent = jest.fn();
  });

  // it('matches the snapshot', () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

  // it('has a property scrollText with initial state of an empty object', () => {
  //   mockState = {};
  //   expect(wrapper.state('scrollText')).toBe(mockState);
  // });

  // it('should invoke the fetchFilm function on pageload', () => {
  //   wrapper.instance().fetchFilm(mockEvent);
  //   expect(mockEvent).toHaveBeenCalled();
  // });

  // it('should call fetchFilm with the correct params', () => { 
  //   let mockArray = [{openingCrawl:'Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.'}];
  //   expect(fetchFilm).toHaveBeenCalledWith(mockArray);
  // });

  // it('should update state with the correct data when fetchFilm is invoked', () => {
  //   let mockArray = [{openingCrawl:'Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.'}];
  //   wrapper.instance().fetchFilm(mockArray);
  //   expect(wrapper.state('scrollText')).toEqual(mockState);
  // });

});