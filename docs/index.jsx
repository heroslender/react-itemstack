import React from 'react';
import ReactDOM from 'react-dom';
import EnchantedItem from '../examples/enchanted-item';
import ExampleItemstack from '../examples/example-itemstack';
import LoreItem from '../examples/lore-item';
import PlainItem from '../examples/plain-item';

class App extends React.Component {
	render() {
		return (
			<div>
				<ExampleItemstack />
				<PlainItem />
				<EnchantedItem />
				<LoreItem />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
