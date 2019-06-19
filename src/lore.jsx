import React from 'react';

export default class Lore extends React.Component {
	render() {
		return (
			<div>
				{this.props.content.split('\\n').map((line, i) => <div key={i} className="item-meta lore">{line}</div>)}
			</div>
		);
	}
}
