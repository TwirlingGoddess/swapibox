export const fetchData = async (value) => {
    try {
      const url = `https://swapi.co/api/${value}/`
      const response = await fetch(url)
      const data = await response.json()
	  return data
    } catch(error) {
      console.log(error.message)
    }
  }

export const fetchHome = async (url) => {
  try{
    const response = await fetch(url)
    const homeData = await response.json()
    const homeObj = { homeworld: homeData.name, population: homeData.population }
    return homeObj
  } catch(error) {
    console.log(error.message)
  }
}

export const fetchSpecies = async (url) => {
  try{
    const response = await fetch(url)
    const speciesData = await response.json()
    return speciesData.name
  } catch(error) {
    console.log(error.message)
  }
}

export const fetchPlanets = async (url) => {
  try {
    const response = await fetch(url)
    const planetData = await response.json()
    console.log(planetData)
     
    // console.log(planetObj)
    return planetObj
  } catch(error) {
    console.log(error.message)
  }
}