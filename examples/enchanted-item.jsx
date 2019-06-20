import React from 'react';
import ItemStack from '../src/itemstack';
import Enchantment from '../src/enchantment';

export default () => (
	<ItemStack id="minecraft:golden_axe">
		<Enchantment id="minecraft:efficiency" level="4" />
		<Enchantment id="minecraft:mending" level="1" />
	</ItemStack>
);
