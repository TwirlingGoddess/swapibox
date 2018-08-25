import React from 'react';
import Landing from '../Landing/Landing';
import App from './App';
import { 
  firstFetch, 
  fetchData, 
  fetchHome, 
  fetchSpecies, 
  fetchResidents 
} from './fetchCalls';


describe('fetchCalls', () => {

    // ------------ firstFetch----------------------
  describe ('firstFetch', () => {
      let mockEvent;
      let mockScroll;
      let mockLandingState;
      let expected;
      let url
      
    beforeEach(() => {
      mockEvent = jest.fn();
      mockScroll = ['Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.'];
      mockLandingState = { text: 'Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.' };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockScroll)
        });
      });
    });

    it('should call firstFetch with the correct params', () => {
      url = 'https://swapi.co/api/films' 
      expected = [
        { url,
          method: 'POST' ,
          body: JSON.stringify({
            scrollText: mockLandingState }),
          headers: {
            'Content-type': 'application/json'
          };
        };
      ];
      firstFetch(mockEvent);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object if response is ok', async () => {
      url = 'https://swapi.co/api/films' 
      expected = mockLandingState
      const result = await firstFetch(url)
      expect(result).toEqual(expected)
    })

    it('should throw an error if the fetch fails', async () => {
      url = 'https://swapi.co/api/films' 
      expected = new Error(error.message)
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(new Error(error.message))
      })
      await expect(firstFetch(url)).rejects.toEqual(expected)
    })

    it('should throw an error if the status is not ok', async () => {
      url = 'https://swapi.co/api/films' 
      expected = new Error(error.message)
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        })
      })
      await expect(firstFetch(url)).rejects.toEqual(expected)
    })

    // ------------ fetchData----------------------
  describe ('fetchData', () => {
      let mockEvent;
      let mockData;
      let mockState;
      let expected;
      let url
      
    beforeEach(() => {
      mockEvent = jest.fn();
      mockState = [{
        homeworld: "Tatooine",
        id: 1135694282614.0696,
        name: "Luke Skywalker",
        population: "200000",
        species: "Human",
        type: "people" }]
      mockData = {
        homeworld: "Tatooine",
        id: 1135694282614.0696,
        name: "Luke Skywalker",
        population: "200000",
        species: "Human",
        type: "people" }
      mockValue = 'people'
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData)
        });
      });
    });

    it('should call fetchData with the correct params', () => {
      url = 'https://swapi.co/api/people' 
      expected = [
        { url,
          method: 'POST' ,
          body: JSON.stringify({
            people: mockState }),
          headers: {
            'Content-type': 'application/json'
          };
        };
      ];
      fetchData(mockEvent);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object if the response is ok', async () => {
      expected = mockData;
      const result = await fetchData(url);
      expect(result).toEqual(expected);
    });

    it('should throw an error if the fetch fails', () => {
      expected = new Error(error.message);
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(new Error(error.message))
      });
      await expect(fetchData(mockData)).rejects.toEqual(expected);
    });

    it('should throw an error if the status is not ok', () => {
      expected = new Error(error.message);
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(fetchData(mockData)).rejects.toEqual(expected);
    });
  });
    // ------------ fetchHome----------------------
  describe ('fetchHome', () => {
    let mockEvent;
    let mockHome;
    let mockValue;
    let expected;
    let url
    
    beforeEach(() => {
      mockEvent = jest.fn();
      mockHome = ''
      mockValue = ''
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockHome)
        });
      });
    });

  })
    // ------------ fetchSpecies----------------------
  describe ('fetchSpecies', () => {
    let mockEvent;
    let mockSpecies;
    let mockValue;
    let expected;
    let url
    
    beforeEach(() => {
      mockEvent = jest.fn();
      mockSpecies = ''
      mockValue = ''
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockSpecies)
        });
      });
    });

  })
    // ------------ fetchResidents----------------------
  describe ('fetchResidents', () => {
    let mockEvent;
    let mockResidents;
    let mockValue;
    let expected;
    let url
    
    beforeEach(() => {
      mockEvent = jest.fn();
      mockResidents = ''
      mockValue = ''
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResidents)
        });
      });
    });

  })
})