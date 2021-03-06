import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {
	state = {
		person: [
			{ name: 'Saurus', age: 22 },
			{ name: 'Ztrimus', age: '23' },
			{ name: 'Cyrus', age: '24' },
		],
		Othet: 'asfsfasfasfas',
	};

	switchNameHandler = (newName) => {
		//DONT'T DO THIS: personsState.person[0].name = 'Saurabh';
		this.setState({
			person: [
				{ name: newName, age: 22 },
				{ name: 'Ztrimus', age: 23 },
				{ name: 'Cyrus', age: 34567 },
			],
		});
	};

	nameChangedHandler = (event) => {
		this.setState({
			person: [
				{ name: 'Saurabh', age: 22 },
				{ name: event.target.value, age: 23 },
				{ name: 'Cyrus', age: 34567 },
			],
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
		return (
			<div className='App'>
				<h1>I'm React App</h1>
				<button style={style} onClick={() => this.switchNameHandler('Saurabh New Call')}>
					Switch Name
				</button>
				<Person name={this.state.person[0].name} age={this.state.person[0].age} />
				<Person
					name={this.state.person[1].name}
					age={this.state.person[1].age}
					changed={this.nameChangedHandler}
					clickMyMan={this.switchNameHandler.bind(this, 'ReferencCallBind')}
				>
					My hoopies is dance
				</Person>
				<Person name={this.state.person[2].name} age={this.state.person[2].age} />
			</div>
		);
	}
}

export default App;
