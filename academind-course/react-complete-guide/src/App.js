import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
	const [personsState, SetPersonsState] = useState({
		person: [
			{ name: 'Saurus', age: 22 },
			{ name: 'Ztrimus', age: '23' },
			{ name: 'Cyrus', age: '24' },
		],
		Othet: 'asfsfasfasfas',
	});

	const switchNameHandler = () => {
		//DONT'T DO THIS: personsState.person[0].name = 'Saurabh';
		SetPersonsState({
			person: [
				{ name: 'Saurabh', age: 22 },
				{ name: 'Ztrimus', age: 23 },
				{ name: 'Cyrus', age: 34567 },
			],
			otherState: 'Saurbah zinjad',
		});
	};

	return (
		<div className='App'>
			<h1>I'm React App</h1>
			<button onClick={switchNameHandler}>Switch Name</button>
			<Person name={personsState.person[0].name} age={personsState.person[0].age} />
			<Person name={personsState.person[1].name} age={personsState.person[1].age}>
				My hoopies is dance
			</Person>
			<Person name={personsState.person[2].name} age={personsState.person[2].age} />
		</div>
	);
};

export default app;
