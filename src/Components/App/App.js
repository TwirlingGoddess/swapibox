import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Button from '../Buttons/Button';
import { CategoryContainer } from '../CategoryContainer/CategoryContainer';
import { fetchData } from '../App/fetchCalls.js'
let currentClick

class App extends Component {
	constructor() {
		super();

		this.state = {
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

  componentDidMount() {
  }

  populateCards = async (event) => {
    const {value} = event.target
    if(`!this.state.${value}.length`) {
      const data = await fetchData(value)
      const getData = await this.filterData(data.results)
      this.setState({
        [value]: getData,
        buttons: {[value]: true}
      })
      currentClick = value
      return currentClick
    }
    // if(`this.state.${value}.length`) {

    // }
  }

  filterData = (cardItems) => {
      console.log(cardItems)
    const characterName = cardItems.map(async card => card.name)
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
        {this.state.landing &&
        <Landing removeLanding={this.removeLanding}/>}
        <CategoryContainer stateArray={[]}/>
      </div>
    )
  }
}

export default App;
