import React, { Component } from 'react'
import './Landing.css';
// import a song here

class Landing extends Component {
	constructor() {
		super() 
		this.state = {
			scrollText: {}
		}
	}

	componentDidMount = async () => {
		const response = await fetch('https://swapi.co/api/films')
		const reaction = await response.json()
		const newVariable = this.fetchFilm(reaction.results)

		// return promise.all(newVariable)
	}

	fetchFilm = (arrayOfFilmResults) => {
		const crawlText = arrayOfFilmResults.map(film => {
			let text = film.opening_crawl;
			let year = film.release_date;
			let title = film.title;
			return Object.assign({}, 	{text: text}, {year: year}, {title: title})
		})
		this.setState({
			scrollText: crawlText[Math.floor(Math.random() * arrayOfFilmResults.length)]
		})
	}


	render() {
		const { year, title, text } = this.state.scrollText
		return(
			<article>
				<p>{text}</p>
				<h3>{title}</h3>
				<h4>{year}</h4>
			</article>
		)
	}
}

export default Landing