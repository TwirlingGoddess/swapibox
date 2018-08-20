import React, { Component } from 'react'
import './Landing.css';
// import a song here

class Landing extends Component {
	constructor() {
		super() 
		this.state = {
			scrollText: ''
		}
	}

	componentDidMount = async () => {
		const response = await fetch(www.swapi.co/films)
		const reaction = await response.json()
		const newVariable = this.fetchFilm(reaction.results)

		// return promise.all(newVariable)
	}

	fetchFilm = (reaction) => {
		// const crawlText = reaction.results.filter(film => film.opening_crawl)
		console.log(reaction)
	}


	render() {
		return(
			<article>
				{this.fetchFilm}
			</article>
		)
	}
}

export default Landing