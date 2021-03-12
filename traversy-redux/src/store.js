import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// we don't need to added "./reducers/index". cuase webpack automatically gonna look at index.js file.

const initialize = {};
const middleware = [thunk];
const store = createStore(
	rootReducer,
	initialize,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
