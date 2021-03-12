import React from 'react';
import './Person.css';
// class Person extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<p>
// 					I'm {this.props.name} and I am {this.props.age} year old!
// 				</p>
// 			</div>
// 		);
// 	}
// }

// export default Person;

const person = (props) => {
	return (
		<div className='Person'>
			<p onClick={props.click}>
				I'm {props.name} and I am {props.age} year old!
			</p>
			<p>{props.children}</p>
			<input type='text' onChange={props.changed} value={props.name} />
		</div>
	);
};

export default person;
