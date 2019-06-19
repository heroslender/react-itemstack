import React from 'react';
import './itemstack.css';

export default class ItemStack extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			minecraftID: props.id.split(':')[1],
			name: props.id.split(':')[1].replace('_', ' ').replace(/(?:^|\s)\S/g, function(a) {
				return a.toUpperCase();
			})
		};
	}

	render() {
		return (
			<div className="item-display">
				<div className="icon">
					<img
						src={`https://raw.githubusercontent.com/InventivetalentDev/minecraft-assets/1.14/assets/minecraft/textures/item/${this
							.state.minecraftID}.png`}
						alt={this.state.name}
					/>
				</div>
				<div className="item-info">
					<div className="item-meta name">{this.state.name}</div>
					{this.props.children}
				</div>
			</div>
		);
		this.props.children;
	}
}
