import React from 'react';
import Landing from '../Landing/Landing';
import App from './App'

beforeEach(() => {
    mockEvent = jest.fn()
    mockScroll = 'Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.'
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockScroll)
      })
    })
  });

  it('should call fetch with the correct params', () => {
    const expected = [
    'https://swapi.co/api/films', 
      {
        method: 'POST' ,
        body: JSON.stringify({
          scrollText: mockScroll }),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ]
  })