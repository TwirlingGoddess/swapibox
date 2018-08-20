import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';

class App extends Component {
	constructor() {
		super()

		this.state = {

		}
	}
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">SWAPIbox</h1>
        </header>
        <Landing />
      </div>
    );
  }
}

export default App;
