import React from 'react';

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
		<div>
			<p>
				I'm {props.name} and I am {props.age} year old!
			</p>
			{props.children}
		</div>
	);
};

export default person;
