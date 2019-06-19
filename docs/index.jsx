import React from 'react';
import ReactDOM from 'react-dom';
import ExampleItemstack from '../examples/example-itemstack';

class App extends React.Component {
	render() {
		return <ExampleItemstack />;
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
