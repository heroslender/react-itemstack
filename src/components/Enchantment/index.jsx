import React from "react";

import { getEnchantmentById } from "./enchantment";

import { Meta } from "../../styles";

export default function Enchantment({ id, level }) {
  const enchantment = getEnchantmentById(id);
  enchantment.setLevel(level);

  return <Meta className="enchantment">{enchantment.getDisplayName()}</Meta>;
}
