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

describe ('fetchCalls', () => {
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

  it('should return an object if response is ok', () => {
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

})