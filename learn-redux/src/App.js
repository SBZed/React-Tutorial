import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signin, signout } from './actions';
function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();
	return (
		<div className='App'>
			<h1>Counter {counter}</h1>
			<button onClick={() => dispatch(increment(5))}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(signin())}>Login</button>
			<button onClick={() => dispatch(signout())}>Logout</button>
			{!isLogged ? <h3>Shouldn't see this info</h3> : ''}
		</div>
	);
}

export default App;
