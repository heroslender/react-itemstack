import React from "react";

import { ItemStack, Enchantment } from "../../src";

export default () => (
  <ItemStack id="minecraft:golden_axe">
    <Enchantment id="minecraft:efficiency" level="4" />
    <Enchantment id="minecraft:mending" level="1" />
  </ItemStack>
);
