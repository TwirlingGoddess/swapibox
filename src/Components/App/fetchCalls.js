
export const firstFetch = async (url) => { 
  try {
    const response = await fetch(url);
    const reaction = await response.json();
    return await reaction;
  } catch (error) {
      throw new Error(error.message);
  }
};

export const fetchData = async (value) => {
  try {
    const url = `https://swapi.co/api/${value}/`;
    const response = await fetch(url);
    const data = await response.json();
  return data;
  } catch (error) {
      throw new Error(error.message);
  }
};

export const fetchHome = async (url) => {
  try {
    const response = await fetch(url);
    const homeData = await response.json();
    const homeObj = { 
      homeworld: homeData.name, 
      population: homeData.population 
    };
    return homeObj;
  } catch (error) {
      throw new Error(error.message);
  }
};

export const fetchSpecies = async (url) => {
  try {
    const response = await fetch(url);
    const speciesData = await response.json();
    return speciesData.name;
  } catch (error) {
      throw new Error(error.message);
  }
};

export const fetchResidents = (urlArray) => {
  
  try { 
    const residentNames = urlArray.map(async url => {
      const response = await fetch(url);
      const residentData = await response.json();
      return residentData.name;
    });
    return Promise.all(residentNames);
  } catch (error) {
      throw new Error(error.message);
  }
};
