import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
	state = {
		person: [
			{ id: 'asda1', name: 'Saurus', age: 22 },
			{ id: 'asda2', name: 'Ztrimus', age: '23' },
			{ id: 'asda3', name: 'Cyrus', age: '24' },
		],
		showPersons: false,
		Othet: 'asfsfasfasfas',
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.person];
		persons.splice(personIndex, 1);
		this.setState({ person: persons });
	};

	nameChangedHandler = (event, id) => {
		const persons = [...this.state.person];
		persons.find((d) => d.id === id).name = event.target.value;
		this.setState({ person: persons });
	};

	togglePersonsHandler = () => {
		this.setState({
			showPersons: !this.state.showPersons,
		});
	};

	render() {
		const style = {
			backgroundColor: 'blue',
			font: 'inherit',
			color: 'white',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		};
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.person.map((person, index) => {
						return (
							<Person
								name={person.name}
								age={person.age}
								click={() => this.deletePersonHandler(index)}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
		}
		return (
			<div className='App'>
				<h1>I'm React App</h1>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
