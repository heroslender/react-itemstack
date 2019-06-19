export class EnchantmentType {
  constructor(id, name, displayLevel = true) {
    this.id = id;
    this.name = name;
    this.level = 1;
    /** @private */
    this._willDisplayLevel = displayLevel;
  }
  setLevel(newLevel) {
    this.level = newLevel
  }
  getDisplayName(level = this.level) {
    let finalName = this.name
    if (this._willDisplayLevel) {
      finalName += ` ${this.getDisplayLevel(level)}`
    }
    return finalName;
  }
  getDisplayLevel(level) {
    if (isNaN(level))
      return NaN;
    var digits = String(+level).split(""),
      key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"
      ],
      roman = "",
      i = 3;
    while (i--)
      roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
  }
  equals(other) {
    return this.id === other.id && this.level === other.level;
  }
  clone() {
    const e = new EnchantmentType(this.id, this.name, this._willDisplayLevel)
    e.setLevel(this.level)
    return e;
  }
  static parse(source) {
    /** @type Enchantment */
    const e = enchantments[source.id]
    if (e) {
      const newEnchant = e.clone()
      newEnchant.setLevel(source.lvl)
      return newEnchant
    }
    return undefined
  }
}

const enchantments = {
  "minecraft:mending": new EnchantmentType("mending", "Mending", false),
  "minecraft:efficiency": new EnchantmentType("efficiency", "Efficiency"),
  "minecraft:protection": new EnchantmentType("protection", "Protection"),
  "minecraft:fire_protection": new EnchantmentType("fire_protection", "Fire Protection"),
  "minecraft:projectile_protection": new EnchantmentType("projectile_protection", "Projectile Protection"),
  "minecraft:blast_protection": new EnchantmentType("blast_protection", "Blast Protection"),
  "minecraft:feather_falling": new EnchantmentType("feather_falling", "Feather Falling"),
  "minecraft:sharpness": new EnchantmentType("sharpness", "Sharpness"),
  "minecraft:smite": new EnchantmentType("smite", "Smite"),
  "minecraft:bane_of_arthropods": new EnchantmentType("bane_of_arthropods", "Bane of Arthropods"),
  "minecraft:knockback": new EnchantmentType("knockback", "Knockback"),
  "minecraft:fire_aspect": new EnchantmentType("fire_aspect", "Fire Aspect"),
  "minecraft:looting": new EnchantmentType("looting", "Looting"),
  "minecraft:efficiency": new EnchantmentType("efficiency", "Efficiency"),
  "minecraft:silk_touch": new EnchantmentType("silk_touch", "Silk Touch"),
  "minecraft:unbreaking": new EnchantmentType("unbreaking", "Unbreaking"),
  "minecraft:fortune": new EnchantmentType("fortune", "Fortune"),
  "minecraft:power": new EnchantmentType("power", "Power"),
  "minecraft:punch": new EnchantmentType("punch", "Punch"),
  "minecraft:flame": new EnchantmentType("flame", "Flame"),
  "minecraft:infinity": new EnchantmentType("infinity", "Infinity"),
  "minecraft:luck_of_the_sea": new EnchantmentType("luck_of_the_sea", "Luck of the Sea"),
  "minecraft:lure": new EnchantmentType("lure", "Lure"),
}

/**
 * 
 * @param {string} enchantmentID 
 * @returns {EnchantmentType}
 */
export const getEnchantmentById = (enchantmentID) => {
  /** @type {EnchantmentType} */
  const ench = enchantments[enchantmentID]

  return ench && ench.clone()
};

export default enchantments
