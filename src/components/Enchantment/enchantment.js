export class Enchantment {
  constructor(id, name, displayLevel = true) {
    this.id = id;
    this.name = name;
    this.level = 1;

    /** @private */
    this._willDisplayLevel = displayLevel;
  }

  setLevel(newLevel) {
    this.level = newLevel;
  }

  getDisplayName(level = this.level) {
    let finalName = this.name;

    if (this._willDisplayLevel) {
      finalName += ` ${this.getDisplayLevel(level)}`;
    }

    return finalName;
  }

  getDisplayLevel(level) {
    if (isNaN(level)) {
      return NaN;
    }

    let key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX"
    ];

    let digits = String(+level).split("");
    let roman = "";
    let i = 3;

    while (i--) {
      roman = (key[+digits.pop() + i * 10] || "") + roman;
    }

    return Array(+digits.join("") + 1).join("M") + roman;
  }

  equals(other) {
    return this.id === other.id && this.level === other.level;
  }

  clone() {
    const enchantment = new Enchantment(
      this.id,
      this.name,
      this._willDisplayLevel
    );
    enchantment.setLevel(this.level);

    return enchantment;
  }
}

/**
 *
 * @param {string} id
 * @returns {Enchantment}
 */
export function getEnchantmentById(id) {
  if (!id.startsWith("minecraft:")) {
    id = "minecraft:" + id;
  }

  /** @type {Enchantment} */
  const enchantment = enchantmentTypes[id];

  return enchantment && enchantment.clone();
}

const enchantmentTypes = {
  "minecraft:mending": new Enchantment("mending", "Mending", false),
  "minecraft:efficiency": new Enchantment("efficiency", "Efficiency"),
  "minecraft:protection": new Enchantment("protection", "Protection"),
  "minecraft:fire_protection": new Enchantment(
    "fire_protection",
    "Fire Protection"
  ),
  "minecraft:projectile_protection": new Enchantment(
    "projectile_protection",
    "Projectile Protection"
  ),
  "minecraft:blast_protection": new Enchantment(
    "blast_protection",
    "Blast Protection"
  ),
  "minecraft:feather_falling": new Enchantment(
    "feather_falling",
    "Feather Falling"
  ),
  "minecraft:sharpness": new Enchantment("sharpness", "Sharpness"),
  "minecraft:smite": new Enchantment("smite", "Smite"),
  "minecraft:bane_of_arthropods": new Enchantment(
    "bane_of_arthropods",
    "Bane of Arthropods"
  ),
  "minecraft:knockback": new Enchantment("knockback", "Knockback"),
  "minecraft:fire_aspect": new Enchantment("fire_aspect", "Fire Aspect"),
  "minecraft:looting": new Enchantment("looting", "Looting"),
  "minecraft:efficiency": new Enchantment("efficiency", "Efficiency"),
  "minecraft:silk_touch": new Enchantment("silk_touch", "Silk Touch"),
  "minecraft:unbreaking": new Enchantment("unbreaking", "Unbreaking"),
  "minecraft:fortune": new Enchantment("fortune", "Fortune"),
  "minecraft:power": new Enchantment("power", "Power"),
  "minecraft:punch": new Enchantment("punch", "Punch"),
  "minecraft:flame": new Enchantment("flame", "Flame"),
  "minecraft:infinity": new Enchantment("infinity", "Infinity"),
  "minecraft:luck_of_the_sea": new Enchantment(
    "luck_of_the_sea",
    "Luck of the Sea"
  ),
  "minecraft:lure": new Enchantment("lure", "Lure")
};

export default enchantmentTypes;
