import React from 'react';
import { getEnchantmentById } from './enchantment-types';

export default class Enchantment extends React.Component {
    constructor(props) {
        super(props)

        const enchantment = getEnchantmentById(props.id)
        enchantment.setLevel(props.level)

        this.state = {
            enchantment 
        }
    }
    
	render() {
        return <div className="item-meta enchantment">{this.state.enchantment.getDisplayName()}</div>
	}
}
