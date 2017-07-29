import React, { Component } from 'react'
import {
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Button
} from 'react-bootstrap'

class SearchRecipes extends Component {
	constructor(props) {
		super(props)

		this.state = {
			ingredients: '',
			dish: ''
		}
	}

	search = () => {
		let { ingredients, dish } = this.state
		const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`

		fetch(url)
			.then(res => res.json())
			.then(json => console.log('recipes', json))
	}

	handleIngredients = event => {
		this.setState({ ingredients: event.target.value })
	}

	handleDish = event => {
		this.setState({ dish: event.target.value })
	}

	render() {
		return (
			<Form inline>
				<FormGroup>
					<ControlLabel>Ingredients</ControlLabel>{' '}
					<FormControl
						type="text"
						placeholder="garlic, chicken"
						onChange={this.handleIngredients}
					/>
				</FormGroup>{' '}
				<FormGroup>
					<ControlLabel>Dish</ControlLabel>{' '}
					<FormControl
						type="text"
						placeholder="adobo"
						onChange={this.handleDish}
					/>
				</FormGroup>{' '}
				<Button onClick={this.search}>Submit</Button>
			</Form>
		)
	}
}

export default SearchRecipes
