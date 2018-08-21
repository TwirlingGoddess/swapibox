import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Button from '../Buttons/Button';
import { CategoryContainer } from '../CategoryContainer/CategoryContainer';

class App extends Component {
	constructor() {
		super()

		this.state = {
      people: [],
      planets: [],
      vehicles: [],
      favorites: []
		}
	}
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">SWAPIbox</h1>
          <Button value='people' />
          <Button value='planets' />
          <Button value='vehicles' />
          <Button value='favorites' />
        </header>
        <Landing />
        <CategoryContainer stateArray={this.state.people}/>
      </div>
    );
  }
}

export default App;
