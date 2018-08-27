import { 
  firstFetch, 
  fetchData, 
  fetchHome, 
  fetchSpecies, 
  fetchResidents 
} from './fetchCalls';

describe('firstFetch', () => {
  let mockEvent;
  let mockScroll;
  let mockLandingState;
  let expected;
  let url;
      
  beforeEach(() => {
    mockEvent = jest.fn();
    mockScroll = ['Turmoil has engulfed the Galactic Republic.'];
    mockLandingState = { text: 'Turmoil has engulfed the Galactic Republic.' };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockScroll)
      });
    });
  });

  it('should call firstFetch with the correct params', () => {
    url = 'https://swapi.co/api/films'; 
    expected = [
      { url,
        method: 'POST',
        body: JSON.stringify({
          scrollText: mockLandingState }),
        headers: {
          'Content-type': 'application/json'
        }
      }
    ];
    firstFetch(...expected);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it('should return an object if response is ok', async () => {
    url = 'https://swapi.co/api/films'; 
    expected = mockScroll;
    const result = await firstFetch(url);
    expect(result).toEqual(expected);
  });

  it('should throw an error if the fetch fails', async () => {
    url = 'https://swapi.co/api/films'; 
    expected = new Error('failed');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(new Error('failed'));
    });
    await expect(firstFetch(url)).rejects.toEqual(expected);
  });

  it('should throw an error if the status is not ok', async () => {
    url = 'https://swapi.co/api/films'; 
    expected = new Error('response.json is not a function');
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(firstFetch(url)).rejects.toEqual(expected);
  });

   
  describe('fetchData', () => {
    let mockEvent;
    let mockData;
    let mockState;
    let expected;
    let url;
      
    beforeEach(() => {
      mockEvent = jest.fn();
      mockState = [{
        name: "Luke Skywalker" }];
      mockData = {
        name: "Luke Skywalker" };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockData)
        });
      });
    });

    it('should call fetchData with the correct params', () => {
      
      url = 'https://swapi.co/api/people/'; 
      expected = [
        { url,
          method: 'POST',
          body: JSON.stringify({
            people: mockState }),
          headers: {
            'Content-type': 'application/json'
          }
        }
      ];
      fetchData('people');
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return an object if the response is ok', async () => {
      expected = mockData;
      const result = await fetchData(url);
      expect(result).toEqual(expected);
    });

    it('should throw an error if the fetch fails', async () => {
      expected = new Error('failed');
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(new Error('failed'));
      });
      await expect(fetchData(url)).rejects.toEqual(expected);
    });

    it('should throw an error if the status is not ok', async () => {
      expected = new Error('response.json is not a function');
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(fetchData(url)).rejects.toEqual(expected);
    });
  });

  describe('fetchHome', () => {
    let mockEvent;
    let mockHome;
    let mockState;
    let expected;
    let url;
      
    beforeEach(() => {
      mockEvent = jest.fn();
      mockState = [{
        homeworld: "Tatooine",
        population: "200000" }];
      mockHome = {
        population: "200000" };
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockHome)
        });
      });
    });

    it('should call fetchHome with the correct params', () => {
      url = 'https://swapi.co/api/planets/1'; 
      expected = [
        { url,
          method: 'POST',
          body: JSON.stringify({
            people: mockState }),
          headers: {
            'Content-type': 'application/json'
          }
        }
      ];
      fetchHome(...expected);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object if the response is ok', async () => {
      expected = mockHome;
      const result = await fetchHome(url);
      expect(result).toEqual(expected);
    });

    it('should throw an error if the fetch fails', async () => {
      expected = new Error('failed');
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(new Error('failed'));
      });
      await expect(fetchHome(url)).rejects.toEqual(expected);
    });

    it('should throw an error if the status is not ok', async () => {
      expected = new Error('response.json is not a function');
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(fetchHome(url)).rejects.toEqual(expected);
    });
  });

  describe('fetchSpecies', () => {
    let mockEvent;
    let mockSpecies;
    let mockState;
    let expected;
    let url;
      
    beforeEach(() => {
      mockEvent = jest.fn();
      mockState = [{
        name: "Human"}];
      mockSpecies = { 
        name: "Human"};
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockSpecies)
        });
      });
    });

    it('should call fetchSpecies with the correct params', () => {
      url = 'https://swapi.co/api/species/1';
      expected = [
        { url,
          method: 'POST',
          body: JSON.stringify({
            people: mockState }),
          headers: {
            'Content-type': 'application/json'
          }
        }
      ];
      fetchSpecies(...expected);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object if the response is ok', async () => {
      expected = mockSpecies;
      const result = await fetchSpecies(url);
      expect(result).toEqual(expected.name);
    });

    it('should throw an error if the fetch fails', async () => {
      expected = new Error('failed');
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(new Error('failed'));
      });
      await expect(fetchSpecies(url)).rejects.toEqual(expected);
    });

    it('should throw an error if the status is not ok', async () => {
      expected = new Error('response.json is not a function');
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(fetchSpecies(url)).rejects.toEqual(expected);
    });
  });

  describe('fetchResidents', () => {
    let mockResidents;
    let mockState;
    let expected;
    let url;
      
    beforeEach(() => {
      let mockEvent = jest.fn();
      mockState = [{
        Residents: "Wicket Systri Warrick" }];
      mockResidents = {name: "Wicket Systri Warrick"};
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResidents)
        });
      });
    });

    it('should call fetchResidents with the correct params', () => {
      url = ['https://swapi.co/api/Residents/1'];
      expected = [
        { url,
          method: 'POST',
          body: JSON.stringify({
            planets: mockState }),
          headers: {
            'Content-type': 'application/json'
          }
        }
      ];
      fetchResidents(expected);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it('should return an object if the response is ok', async () => {
      url = ['https://swapi.co/api/Residents/1'];
      expected = mockResidents
      const result = await fetchResidents(url);
      expect(...result).toEqual(expected.name);
    });

    it('should throw an error if the fetch fails', async () => {
      expected = new Error('failed');
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(new Error('failed'));
      });
      await expect(fetchResidents(url)).rejects.toEqual(expected);
    });

    it('should throw an error if the status is not ok', async () => {
      expected = new Error('response.json is not a function');
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      await expect(fetchResidents(url)).rejects.toEqual(expected);
    });
  });
});