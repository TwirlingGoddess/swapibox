import React from 'react';

export const fetchData = async (value) => {
    try {
      const url = `https://swapi.co/api/${value}/`
      console.log(url)
      const response = await fetch(url)
      const data = await response.json()
	  return data
    } catch(error) {
      console.log(error.message)
    }
  }