import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Button from '../Buttons/Button';
import { CategoryContainer } from '../CategoryContainer/CategoryContainer';
import { 
  fetchData, 
  fetchHome, 
  fetchSpecies, 
  fetchResidents 
} from '../App/fetchCalls.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      displayedCards: [],
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      landing: true
    };
  }

  populateCards = async (event) => {
    let getData;
    const {value} = event.target;
    if (`!this.state.${value}.length`) {
      const data = await fetchData(value);
      if (value === 'people') {
        getData = await this.filterPeople(data.results);
      }
      if (value === 'planets') {
        getData = await this.filterPlanets(data.results);
      }
      if (value === 'vehicles') {
        getData = await this.filterVehicles(data.results);
      }
      this.setState({
        [value]: getData,
        buttons: {[value]: true}
      });
    }
    if (`this.state.${value}.length`) {
      this.setState({
        displayedCards: this.state[value],
      });
    }
  }

  filterPeople = (cardItems) => {
    const character = cardItems.map(async card => {
      const name = card.name;
      const homeSearch = await fetchHome(card.homeworld);
      const species = await fetchSpecies(card.species);
      const homeworld = homeSearch.homeworld;
      const population = homeSearch.population;
      const id = Date.now() * Math.random();
      const type = 'people'
      const personObj = await {name, species, homeworld, population, id, type};
      return personObj;
    });
    return Promise.all(character);
  }

  filterPlanets = (cardItems) => {
    const planet = cardItems.map(async card => {
      const name = card.name;
      const terrain = card.terrain;
      const population = card.population;
      const climate = card.climate; 
      const residentResults = await fetchResidents(card.residents);
      const residents = [...residentResults];
      const id = Date.now() * Math.random();
      const type = 'planets'
      const planetObj = await {name, terrain, population, climate, residents, id, type};
      return planetObj;
    });
    return Promise.all(planet);
  };

  filterVehicles = (cardItems) => {
    const vehicle = cardItems.map(async card => {
      const name = card.name;
      const model = card.model;
      const vehicleClass = card.vehicle_class;
      const passengers = card.passengers;
      const id = Date.now() * Math.random();
      const type = 'vehicles'
      const vehicleObj = {name, model, vehicleClass, passengers, id, type};
      return vehicleObj;
    });
    return Promise.all(vehicle);
  };
  
  removeLanding = () => {
    this.setState({
      landing: false
    });
  };

  addToFavorites = (id) => {
    const newFave = this.state.displayedCards.find(card => card.id === id)
    this.setState({
      favorites: [...this.state.favorites, newFave]
    })
    return this.checkDuplicate(newFave.name)
  }

  checkDuplicate = (name) => {
    const favorites = this.state.favorites;
    const duplicate = favorites.filter(card => card.name === name)
    if (duplicate.length > 0) {
      const toggleDuplicate = favorites.filter(favorite => {
        return favorite.name !== name
      })
      this.setState({
        favorites: toggleDuplicate
      })
    }
  }

  displayFavorites = () => {
    this.setState({
      displayedCards: this.state.favorites
    })
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
              populateCards={this.displayFavorites}
              counter={this.state.favorites.length}
              className='counter'
            />
          </div>
        </header>
        <CategoryContainer 
          stateArray={this.state.displayedCards}
          addToFavorites={this.addToFavorites} 
        />
        {this.state.landing &&
        <Landing removeLanding={this.removeLanding}/>}
      </div>
    );
  }
}

export default App;
