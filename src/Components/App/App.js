import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Button from '../Buttons/Button';
import { CategoryContainer } from '../CategoryContainer/CategoryContainer';

class App extends Component {
	constructor() {
		super();

		this.state = {
      people: ['Lee', 'Megan', 'Zoe'],
      planets: [],
      vehicles: [],
      favorites: []
		}
	}



  populateCards = () => {
    
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
        <Landing />
        <CategoryContainer stateArray={this.state.people}/>
      </div>
    );
  }
}

export default App;
