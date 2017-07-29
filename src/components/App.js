import React, { Component } from 'react'
import SearchRecipes from './SearchRecipes'
import '../styles/index.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h2>Recipe Finder</h2>
				<SearchRecipes />
			</div>
		)
	}
}

export default App
