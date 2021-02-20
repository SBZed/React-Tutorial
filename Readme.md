# React - Reacts to state changes

1. Next-Gen JavaScript
    - 1.1. `let and const`
    - 1.2. ES6 Arrow functions
    - 1.3. Exports and Imports
    - 1.4. Classes, Properties, and Methods
    - 1.5. Spread and Rest Operators
    - 1.6. Destructuring
    - 1.7. Reference and primitive type
1. Introduction
    - 1.1. Setup
    - 1.2. Component
    - 1.3. First React App
    - 1.4. Props (Passing Data to component)
    - 1.5. Fetch data from API
    - 1.6. State in react: `useState`
    - 1.7. useEffect: built-in hook
1. React Router
1. State Management
    - 3.1. The need for State Management
    - 3.2. Setup for Context
    - 3.3. Usage of context
    - 3.4. Update value in the context
    - 3.5. Pros and Cons
1. Redux - State management tool
    - 4.1. Theory
    - 4.2. How to Proceed with `redux` library
    - 4.3. How to Proceed with `react-redux` library
    - 4.4. How to access value from the store(Globalized state)
1. From the scratch
    - 5.1. Another way of using react
    - 5.2. JSX
    - 5.3. Small Quirks in JSX
    - 5.4. React Setup from scratch
1. Resource

## 1. Next-Gen JavaScript

1. **`let and const`**
2. **ES6 Arrow functions** - no more issues with **this** keyword
3. **Exports and Imports**

    - Default exports

    ```js
    // person.js
    const person = {
    	name: 'Saurabh',
    };
    export default person;
    ```

    - Named exports

    ```js
    // utility.js
    export const clean = () => { ... }
    export const baseData = 10;
    ```

    - Imports

    ```js
    // app.js
    import person from './person.js';
    import prs from './person.js';

    import { baseData } from './utility.js';
    import * as bundled from './utility.js';
    import { clean as reset } from './utility.js';
    ```

4. **Classes, Properties, and Methods**

```js
class Human {
	gender = 'female';
	printGender = () => {
		console.log(this.gender);
	};
}

class Person extends Human {
	name = 'Saurabh';
	gender = 'male';
	printName = () => {
		console.log(this.name);
	};
}

const person = new Person();
persion.printName(person);
persion.printGender();
```

5. **Spread and Rest Operators**

    1. Spread

        - `...` (three dots.)
        - use to split up array elements OR object properties

            ```js
            const newArray = [...oldArray, 1, 2];
            const newObject = [...oldObject, (newProp: 6)];
            ```

        - NOTE: if oldObject also have `newProp` property, it'll get overridden in newObject.

    2. Rest

        - `...` (three dots.) same as above
        - use to merge a list of function arguments into an array

            ```js
            sortArgs = (...args) => {
            	return args.sort();
            };
            ```

6. **Destructuring**

    - Easily extract array elements or objects properties and store then in variables.
    - Array Destructuring
        ```js
        const names = ['Saurus', 'Zed', 'Ztrimus'];
        [a, , c] = names;
        console.log(a); // Saurus
        console.log(c); // Ztrimus
        ```
    - Object Destructuring
        ```js
        {name} = {name:'Saurus', age: 23};
        console.log(name); // Saurus
        console.log(age); // undefined
        ```

7. **Reference and primitive type**
    - **Not next-gen features but important one.**
    1. Primitive type
        - **Numbers, Strings, and Booleans** are primitive type.
        - means, on assign 1stVariable to 2ndVariable, 1stVariable's value get copy in to 2ndVariable, **NOT reference**.
        ```js
        let num1 = 1;
        let num2 = num1;
        console.log(num1, num2); // {num1: 1, num2: 1}
        num1 = 5;
        console.log(num1, num2); // {num1: 5, num2: 1}
        ```
    2. Reference type
        - **Object and Arrays** are reference type.
        - means, on assign 1stObject to 2ndObject, javascript just copied pointer of 1stObject to 2ndObject and points to the exact same object in memory as 1stObject does.
        - Same thing happen with arrays.
            ```js
            const person = { name: 'Saurus' };
            const secondPerson = person;
            person.name = 'Ztrimus';
            console.log(secondPerson); // {name: 'Ztrimus'}
            ```
        - To avoid this behavior and copy into 2ndObject
            ```js
            const person = { name: 'Saurus' };
            const secondPerson = { ...person };
            person.name = 'Ztrimus';
            console.log(secondPerson); // {name: 'Saurus'}
            ```

## 1. Introduction

-   A javascript library for building user interfaces
-   By Facebook 2011
-   It's Library
-   Angular is Framework
-   React Do Only
    -   it takes care of rendering view and
    -   making sure that the view is in sync with the state.
-   because of this react has very few API. When building application, we need to other libraries for:
    -   Routing
    -   calling HTTP services, etc.

### 1.1. Setup

-   install nodeJs.
-   then install create-react-app `npm i -g create-react-app`
-   Id using VS Code, install `Simple React Snippets` extension.

### 1.2. Component

-   Component basically contain `state` and `render()` method.
-   Each component is the function that contains JS and JSX(like HTML).
-   **state**: Data we want to display when component render
-   **render**: responsible for describing what UI should look like
-   **react element**
    -   output of render method
    -   simple plain javascript object that maps to DOM element
    -   it's just a plain javascript object that represents that DOM element in memory
-   **Virtual DOM**:
    -   React keeps a lightweight representation of the DOM in memory which we referred to **Virtual DOM**.
    -   it's cheap to create.
    -   we don't need to work with DOM API in browsers.
    -   we don't have to change and manipulate DOM directly. (e.g. we don't need `document`, `query`, `$`, `queryselector`, `EventListener`)
    -   when components get updates, Instead of changing the whole DOM, react changes only part of DOM which responsible for a component.

```jsx
class Tweet {
	state = {};
	render() {
		// output the react element
	}
}
```

### 1.3. First React App

-   create app
    ```sh
    create-react-app first-react-app
    ```
-   run application
    ```sh
    npm start
    ```
-   It going to install react and third parties libraries like:
    -   Development server: lightweight
    -   Webpack: for bundling our files
    -   Babel: Modern Javascript Compiler for compiling javascript code ([babel repl](https://babeljs.io/repl)).
    -   other tools
-   this will create an application with a zero-configuration setup
-   for customized configuration setup use `npm run eject`.
-   open up the `App.js` file

```jsx
render() {
    return (
    // Start JavaScript XML
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
        </header>
    </div>
    // End JavaScript XML
    );
}
```

-   What render function returning (contain inside the return()) is not string nor HTML. It's **JSX(Javascript XML)**.

```mermaid
graph LR
A[JavaScript XML] --> B((Babel))
B --> C[Plain JavaScript]
```

### 1.4. Props (Passing Data to component)

-   In `App.js`.

```jsx
import React from 'react';
import Recipe from './Recipe';

function App() {
	return (
		<div className='App'>
			<div>
				{recipes.map((recipeObject) => (
					<Recipe
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
```

-   In child elements `Recipe.js`

```jsx
import React from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div>
			<h1>{title}</h1>
			<ol>
				{ingredients.map((ingredient) => (
					<li>{ingredient}</li>
				))}
			</ol>
			<p>{calories}</p>
			<img src={image} alt='' />
		</div>
	);
};

export default Recipe;
```

### 1.5. Fetch data from API

```jsx
function App() {
	const APP_ID = '1de4a0dd';
	const APP_KEY = '00e28a18b9433a59eec5eedd973a70ab';
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		getRecipes();
	}, [query]);

	// API usage
	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data);
	};
}
```

### 1.6. State in react: useState

```jsx
import React, { useEffect, useState } from 'react';

function App() {
	// define state
	const [search, setSearch] = useState('');

	// change value of state
	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	// usage of state
	return (
		<div className='App'>
			<input className='search-bar' type='text' value={search} onChange={updateSearch} />
			<button className='search-button' type='submit'>
				Search
			</button>
		</div>
	);
}

export default App;
```

### 1.7. useEffect: built-in hook

-   By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.

-   When the first time our page renders, it going to run this effect. After every time, something re-render on our page, it also going to run.

```jsx
useEffect(() => {
	console.log('Effect has been run');
});
```

-   if you want to render only once when the first time page renders, give an empty array as a second argument to useEffect.

```jsx
useEffect(() => {
	console.log('Effect has been run');
}, []);
```

-   if you want to run this effect on some variable change, added that variable into the empty array. like `counter` in the below example.

```jsx
useEffect(() => {
	console.log('Effect has been run');
}, [counter]);
```

## 2. React Router

```bash
npm install react-router-dom
```

```jsx
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
```

-   **BrowserRouter**: It use to the add ability of handling routing in react. you need to wrap code that needs routing ability, around `<Router></Router>`
-   **Route**: Renders component based on URL.
-   **Switch**: It kind of stop checking all route as soon as it goes to one and matches the URL. and only render mentions component

```jsx
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Nav />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/about' component={About} />
					<Route path='/shop' exact component={Shop} />
					<Route path='/shop/:id' component={ItemDetail} />
				</Switch>
			</div>
		</Router>
	);
}
```

-   Let's look at how to navigate when you click on the button.

```jsx
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<nav>
			<h3>Logo</h3>
			<ul>
				<Link to='/about'>
					<li>About</li>
				</Link>
				<Link to='/shop'>
					<li>Shop</li>
				</Link>
				<Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
			</ul>
		</nav>
	);
}
```

## 3. State Management

### 3.1. The need for State Management

```jsx
<div className='App'>
	<Nav />
	<MovieList />
</div>
```

-   Using prop you can only pass down value through the component, but what if you need the same data in an adjacent component. like movieList data from `MovieList` component needs into `Nav` component.
-   this is where **State management** comes into the picture.

### 3.2. Setup for Context

-   We start with creating a context file e.g. `MovieContext.js` which contains all movies data

```jsx
import React, { useState, createContext } from 'react';

export const MovieContext = createContext(); // initialize context

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{
			name: 'Harry Potter',
			price: '$10',
			id: 234,
		},
		// many movie data
	]);

	return (
		<MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
	);
};
```

-   Whenever we want to use information from `MovieContext.js` we gonna use **MovieContext**.
-   **MovieProvider** just gonna provide the information to the different components.
-   And we need to wrap this `MovieProvider` around all the components that we want to give that ability to access that state.
-   `props.children` render all component that wrap around `<MovieContext.Provider>` attribute. e.g.

### 3.3. Usage of context

```jsx
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';

function App() {
	return (
		<MovieProvider>
			<div className='App'>
				<Nav />
				<AddMovie />
				<MovieList />
			</div>
		</MovieProvider>
	);
}
```

-   here as you can see, Navbar, add-movie, and movie listings components need movie data.

### 3.4. Update value in context

-   For now, we use centralized data in MovieContext. now how to change and update it.
-   let say we need to add movies in MovieContext.

```jsx
import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [movies, setMovies] = useContext(MovieContext);

	const updateName = (e) => {
		setName(e.target.value);
	};

	const updatePrice = (e) => {
		setPrice(e.target.value);
	};

	const addMovie = (e) => {
		e.preventDefault();
		// Here we updating value in MovieContext
		setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
	};

	return (
		<form onSubmit={addMovie}>
			<input type='text' name='name' value={name} onChange={updateName} />
			<input type='text' name='price' value={price} onChange={updatePrice} />
			<button type='submit'>Add Movie</button>
		</form>
	);
};

export default AddMovie;
```

### 3.5. Pros and Cons:

-   **Pros**: It's really good if we want to just render out information.
-   **Cons**: If we can change data in context, the problem is every time we update the code in our useContext, all components are going to re-render.

#### 4. Redux - State management tool

-   `redux`: actual state management package.
-   `react redux`: gives us the ability to connect react and redux.

### 4.1. Theory

-   There are 4 things we need to understand:
    1.  `STORE`: It's a globalized state. All state data exist in the isolated object called "STORE".
    2.  `ACTION`: It describes what you want to do with the store.
    3.  `REDUCER`: describes how your action transforms the state into the next state. Basically, on the call of a certain action, the reducer check which action gets called and according to that it modifies the state
    4.  `DISPATCH`: here we execute our actions. "Like dispatch 'specificAction' to 'specificReducer'"

### 4.2. How to Proceed with `redux` library

-   Step 1. create action, it is a function that returns an object.

```jsx
const increment = () => {
	return {
		type: 'INCREMENT',
	};
};
```

-   Step 2. Create Reducer, it's also function returning an object, but it takes state and action as parameters.

```jsx
const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
	}
};
```

-   Step 3. do `import { createStore } from 'redux';`
-   Step 4. create a globalized state. we need to pass reducer to createStore method. like `let store = createStore(counter);`
-   Step 5. Dispatch the store with action. like `store.dispatch(increment());`
-   Let's understand what we did. first, we create a store that needs a reducer(`counter` here) as a parameter and the reducer needs action(`increment`) to run.
-   Hence, we create an action(`increment`) which returns the name of the action.
-   now reducer(`counter`) take that action(`increment`), check its name which `INCREMENT` here. and do modifications in the state according to name. like for increment action, reducer increases state by one.
-   Above process is setup. Now to make changes in store we need to dispatch that store with action.
-   after dispatching an action, the store passes that action to the counter assigned to the store. the counter checks for the name of an action, and make a change in store according to it.

```jsx
import { createStore } from 'redux';

// ACTION - Increment
const increment = () => {
	return {
		type: 'INCREMENT',
	};
};
const decrement = () => {
	return {
		type: 'DECREMENT',
	};
};

// REDUCER
const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
	}
};

// STORE - globalized state
let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

// DISPATCH
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());
```

### 4.3. How to Proceed with `react-redux` library

-   create a separate folder for all reducers. same for actions.
-   write down all reducer code in a new file.`src\reducers\counter.js`

```jsx
const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + action.multipler;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};
export default counterReducer;
```

-   combine all reducers in `src\reducers\index.js`.

```jsx
import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	counter: counterReducer,
	isLogged: loggedReducer,
});

export default allReducers;
```

-   Then import all reducer in `src\index.js`.

```jsx
import { createStore } from 'redux';
import allReducers from './reducers';
// we don't need to added "./reducers/index". cuase webpack automatically gonna look at index.js file.

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```

-   `window.__REDUX_DEVTOOLS_EXTENSION__`: this is for checking values for different states in the chrome dev tool.
-   Now is time to give access of state to all over the app (refer below code). using Provider we pass store data to App.

```jsx
import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
```

### 4.4. How to access value from the store(Globalized state)

-   first, create actions in `src\actions\index.js`

```jsx
export const increment = (multipler) => {
	return {
		type: 'INCREMENT',
		payload: multipler,
	};
};
```

-   Now, let make changes in `src/app.js`

```jsx
import { useSelector } from 'react-redux';
import { increment } from './actions';

function App() {
	const counter = useSelector((state) => state.counter);
	return (
		<div className='App'>
			<h1>Counter {counter}</h1>
			<button onClick={() => dispatch(increment((multipler = 5)))}>+</button>
		</div>
	);
}
```

## 5. From the scratch

### 5.1. Another way of using react

-   Here we going to show you a very basic and simple way to create react app without huge boilerplate code generated by the react.
-   We don't write react code this way, it's just to make you understand behind scenes.
-   We need only the `HTML` and `js` files.
-   On the **HTML side**, We going to write only one div and basically, you inject all generated code from JS into this single div.

```html
<div id="app"></div>
```

-   on **JavaScript Side**, you write code that generated HTML.
-   we gonna use [Code pen](https://codepen.io/pen/) to demonstrate this.
-   Need to import external scripts like `react` and `react-dom`.
-   We can generate any element (div, h1, etc) using react now.

```jsx
React.createElement(element_name, attribute_or_properties_name, content_in_element);
// e.g.
React.createElement('h1', { style: { color: 'red' } }, 'Hello H1');
```

-   now we need to render react code in HTML.

```jsx
ReactDOM.render(element_you_wanna_redner, place_you_wanna_render_it_out);
//e.g. we
ReactDOM.render(
	React.createElement('h1', { style: { color: 'red' } }, 'Hello H1'),
	document.querySelector('#app')
);
```

-   if we want more than one element.

```jsx
function App() {
	return React.createElement('div', null, [
		React.createElement('h1', null, 'Title'),
		React.createElement('h3', null, 'Subtitle'),
		React.createElement('h3', { style: { color: 'red' } }, new Date().toLocaleString()),
	]);
}

ReactDOM.render(React.createElement(App), document.querySelector('#app'));
```

### 5.2. JSX

-   It allows us to write HTML like code.
-   Babel which take JSX code(HTML like code) and turns it into kind of vanilla react code (code we saw above).

```jsx
function App() {
	return (
		<div>
			<Nav />
			<Home />
		</div>
	);
}

function Nav() {
	return (
		<nav>
			<h1>Logo</h1>
			<ul>
				<li>Home</li>
				<li>Contact</li>
				<li>About</li>
			</ul>
		</nav>
	);
}

function Home() {
	return (
		<div>
			<h2>Join Our Magic</h2>
			<p>Harray Potter geeks REJOIC</p>
			<button>Buy our shittt</button>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

### 5.3. Small Quirks in JSX

-   In App -> return function, you may though you don't want to wrap connect of App into <div></div>. like example below.

```jsx
function App() {
	return (
		<Nav />
		<Home />
	);
}
```

-   **But it's going to thorugh error.** You always need one parent div that's wrapping your content around. because we are passinng this code in return to `React.createElement()` function.
-   **Fragment**: But there is way you can avoid having one single parent element, if you don't want `div`. which react come up with which is called "Fragment" (`<></>`). like

```js
function App() {
	return (
		<>
			<Nav />
			<Home />
		</>
	);
}
```

-   It's like `ng-container` in angular.
-   In JSX "class" property, replace by "className".

```jsx
<div>
	<h1 className='text-dark'>Hello</h1>
</div>
```

### 5.4. React Setup from scratch

-   create new folder.
-   run `npm init -y`. This going to create `package.json`. you can do this for any new project (e.g. react project, angular, node apis project, server, for any other framework.)
-   now install react and react-dom.

```sh
npm install react react-dom
```

-   `package-lock.json` basically locks the version of all the different packages that you have in project. Cause, packages are going to update and after time, you projects may be not compatible with packages that you updated.
-   We need to also added babel to use JSX.

```sh
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
```

-   babel/core: basic package.
-   babel/preset-env: allow to use modern javascript (es6, es7, ....) and automatically transplies to older javascript which work with older browsers.
-   babel/preset-react: Allows you to take JSX code and turn it into vanilla react
-   babel-coder: intermediary package the connect babel to webpack.
-   webpack:
    -   we have package install on our node_modules, web browser don't these packages. So, webpack takes our react code and all package/dependancis we are using and mix it, jumbles all those and push final javascript file contains everyting to make it work on all the browsers.
    -   webpack takes your code and react code, combine it so you can serve it to the web. it's also added babel to transplies code, other thing to minfy.
-   Now create **.babelrc** file, and add below code.

```json
{
	"presets": ["@babel/preset-react", "@babel/preset-env"]
}
```

-   now we need to addd webpack and connect babel to it.

```sh
npm install webpack webpack-cli webpack-dev-server
```

-   dev-server allows to use webpack in development environment.
-   now create **wepack.config.js** file and insert below code.

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	resolve: {
		modules: [__dirname, 'src', 'node_modules'],
		extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: require.resolve('babel-loader'),
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.png|svg|jpg|gif$/,
				use: ['file-loader'],
			},
		],
	},
};
```

-   Create `src` folder. and then create Basic/root/App component `App.js` file in it. and put code in it.

```js
import React from 'react';

const App = () => <div>Hello React</div>;

export default App;
```

-   create `index.html` where whole react generated code renders. (trick: using emmet extension you can type `doc` and hit tab to automatically generate below code)

```html
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>React</title>
	</head>
	<body>
		<div id="root"></div>
	</body>
</html>
```

-   create `index.js` file which entry point of application.

```jsimport React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.querySelector('#root'));
```

-   Now to start this application, we need to setup and run webpack. go to `package.json` and add below script in script object.

```json
{
	"scripts": {
		"start": "webpack-dev-server --hot --open",
		"build": "webpack --config webpack.config.js --mode production"
	}
}
```

-   `--hot`: if we made changes, it automatically going to update itself.
-   `--open`: automatically going to open application when server is ready.

## 9. Resource

-   [React Tutorial for Beginners: With Mosh](https://www.youtube.com/watch?v=Ke90Tje7VS0)
-   [React Tutorial for Beginners Playlist: Dev Ed](https://www.youtube.com/playlist?list=PLDyQo7g0_nsVHmyZZpVJyFn5ojlboVEhE)
