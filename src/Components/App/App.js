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
    try {
      const url = `https://swapi.co/api/${value}/`
      console.log(url)
      const response = await fetch(url)
      const data = await response.json()
    console.log(data)
      // const getData = await this.filterData(data)
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
              value='people' 
              populateCards={this.populateCards}
            />
            <Button 
              value='planets'
              populateCards={this.populateCards}
            />
            <Button 
              value='vehicles' 
              populateCards={this.populateCards}
            />
            <Button 
              value='favorites'
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
