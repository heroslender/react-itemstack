import React from 'react';
import ItemStack from '../src/itemstack';
import Lore from '../src/lore';
import Enchantment from '../src/enchantment';

export default () => (
	<ItemStack id="minecraft:diamond_sword">
		<Lore content="Hello\nWorld!" />
		<Enchantment id="minecraft:efficiency" level="4" />
		<Enchantment id="minecraft:mending" level="1" />
	</ItemStack>
);
