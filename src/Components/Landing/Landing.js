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
			<div>
				<div className="fade"></div>
				<article className="star-wars">
					<div className="crawl">
						<div className="title">
							<h1>{title}</h1>
							<p>{year}</p>
						</div>
						<p>{text}</p>
					</div>
				</article>
			</div>
		)
	}
}

export default Landing