import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Button from '../Buttons/Button';

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
          <Button value={this.state.people} />
          <Button value={this.state.planets} />
          <Button value={this.state.vehicles} />
          <Button value={this.state.favorites} />
        </header>
        <Landing />
      </div>
    );
  }
}

export default App;
