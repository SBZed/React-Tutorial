import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{
			name: 'Harry Potter',
			price: '$10',
			id: 234,
		},
		{
			name: 'Shutter Island',
			price: '$11',
			id: 243,
		},
		{
			name: 'Tenet',
			price: '$14',
			id: 244,
		},
	]);

	return (
		<MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
	);
};
