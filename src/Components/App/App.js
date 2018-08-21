import React, { Component } from 'react';
import './App.css';
// import Landing from '../Landing/Landing';
import Button from '../Buttons/Button';
import { CategoryContainer } from '../CategoryContainer/CategoryContainer';

class App extends Component {
	constructor() {
		super();

		this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
		}
	}

  fetchData = async (value) => {
    console.log(value)
    try {
      const url = `https://swapi.co/api/${value}`
      const response = await fetch(url)
      const data = await response.json()
      const getData = await this.filterData(data)
    } catch(error) {
       console.log(error.message)
    }
  }


  populateCards = (event) => {
    const {value} = event.target
    if(`!this.state.${value}.length`) {
      this.fetchData(value);
     
    }

  }

  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">SWAPIbox</h1>
          <div className="button-box">
            <Button 
              value='People' 
              populateCards={this.populateCards}
            />
            <Button 
              value='Planets'
              populateCards={this.populateCards}
            />
            <Button 
              value='Vehicles' 
              populateCards={this.populateCards}
            />
            <Button 
              value='Favorites'
              populateCards={this.populateCards}
            />
          </div>
        </header>
        
        <CategoryContainer stateArray={this.state.people}/>
      </div>
    );
  }
}

export default App;
