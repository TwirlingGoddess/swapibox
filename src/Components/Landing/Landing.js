import React, { Component } from 'react';
import './Landing.css';
import { firstFetch } from '../App/fetchCalls'
// import a song here

class Landing extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			scrollText: {}
		}
	}

	componentDidMount = async () => {
		const url = 'https://swapi.co/api/films'
		const reaction = await firstFetch(url)
		console.log(reaction)
	    const newVariable = await this.fetchFilm(reaction.results)
	    console.log(newVariable)
	    this.setState({
	      scrollText: newVariable[Math.floor(Math.random() * reaction.results.length)]
	    })
	}

	fetchFilm = (arrayOfFilmResults) => {
		console.log(arrayOfFilmResults)
		const crawlText = arrayOfFilmResults.map(film => {
			let text = film.opening_crawl;
			let year = film.release_date;
			let title = film.title;
			return Object.assign({}, 	{text: text}, {year: year}, {title: title})
		})
		return Promise.all(crawlText)
	}


	render() {
		const { year, title, text } = this.state.scrollText
		return(
			<div onClick={this.props.removeLanding}>
				<div className="fade"></div>
				<article className="star-wars">
					<div className="crawl">
						<div className="title">
							<h1>{title}</h1>
							<p>{year}</p>
						</div>
						<p>{text}</p>
						<div className="orange">NOW</div>
						<h1 className="red">CLICK HERE ON THE SCREEN</h1>
					</div>
				</article>
			</div>
		)
	}
}

export default Landing