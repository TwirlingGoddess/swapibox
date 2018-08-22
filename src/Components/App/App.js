import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Button from '../Buttons/Button';
import { CategoryContainer } from '../CategoryContainer/CategoryContainer';
import { fetchData, fetchHome, fetchSpecies } from '../App/fetchCalls.js'

class App extends Component {
	constructor() {
		super();

		this.state = {
      displayedCards: [],
      currentlyDisplayed: '',
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      buttons: {people: false,
                planets: false,
                vehicles: false,
                favorites:false,
      },
      landing: true
		}
	}

  populateCards = async (event) => {
    const {value} = event.target
    if(`!this.state.${value}.length`) {
      const data = await fetchData(value)
      const getData = await this.filterData(data.results)
      this.setState({
        [value]: getData,
        buttons: {[value]: true},
      })
    }
      this.setState({
        displayedCards: this.state[value]
        currentlyDisplayed: [value]
      })
  }

  filterData = (cardItems) => {
    const characterName = cardItems.map(async card => {
      const name = card.name
      const homeSearch = await fetchHome(card.homeworld)
      const species = await fetchSpecies(card.species)
      const homeworld = homeSearch.homeworld
      const population = homeSearch.population
      const personObj = await {name, species, homeworld, population}
      console.log(personObj)
      return personObj
    })
    return Promise.all(characterName)
  }
  
  removeLanding = () => {
    this.setState({
      landing: false
    })
  }


  render() {
    return(
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
              // populateCards={this.populateCards}
            />
          </div>
        </header>
        <CategoryContainer stateArray={this.state.displayedCards}
                            currentlyDisplayed={this.state.currentlyDisplayed}/>
        {this.state.landing &&
        <Landing removeLanding={this.removeLanding}/>}
      </div>
    )
  }
}

export default App;
