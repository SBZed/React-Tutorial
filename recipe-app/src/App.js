import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {
	const APP_ID = '1de4a0dd';
	const APP_KEY = '00e28a18b9433a59eec5eedd973a70ab';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	};

	return (
		<div className='App'>
			<h1>Hello React</h1>
			<form className='search-form' onSubmit={getSearch}>
				<input className='search-bar' type='text' value={search} onChange={updateSearch} />
				<button className='search-button' type='submit'>
					Search
				</button>
			</form>
			<div className='recipes'>
				{recipes.map((recipeObject) => (
					<Recipe
						key={recipeObject.recipe.label}
						title={recipeObject.recipe.label}
						calories={recipeObject.recipe.calories}
						image={recipeObject.recipe.image}
						ingredients={recipeObject.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
