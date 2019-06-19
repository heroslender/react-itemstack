import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return <span>Hello World!</span>;
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
