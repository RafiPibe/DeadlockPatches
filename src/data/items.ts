// Item data with wiki image URLs

export interface Item {
  id: string;
  name: string;
  imageUrl: string;
  category: 'Weapon' | 'Vitality' | 'Spirit';
  tier: 1 | 2 | 3 | 4;
}

// Helper to build wiki item icon URL
const wikiItemUrl = (name: string) => {
  const encoded = name.replace(/ /g, '_').replace(/'/g, '%27');
  return `https://deadlock.wiki/images/thumb/a/a0/${encoded}_Icon.png/64px-${encoded}_Icon.png`;
};

export const items: Item[] = [
  // Weapon Tier 1
  { id: 'close-quarters', name: 'Close Quarters', imageUrl: wikiItemUrl('Close_Quarters'), category: 'Weapon', tier: 1 },
  { id: 'extended-magazine', name: 'Extended Magazine', imageUrl: wikiItemUrl('Extended_Magazine'), category: 'Weapon', tier: 1 },
  { id: 'headshot-booster', name: 'Headshot Booster', imageUrl: wikiItemUrl('Headshot_Booster'), category: 'Weapon', tier: 1 },
  { id: 'high-velocity-rounds', name: 'High-Velocity Rounds', imageUrl: wikiItemUrl('High-Velocity_Rounds'), category: 'Weapon', tier: 1 },
  { id: 'monster-rounds', name: 'Monster Rounds', imageUrl: wikiItemUrl('Monster_Rounds'), category: 'Weapon', tier: 1 },
  { id: 'rapid-rounds', name: 'Rapid Rounds', imageUrl: wikiItemUrl('Rapid_Rounds'), category: 'Weapon', tier: 1 },
  { id: 'restorative-shot', name: 'Restorative Shot', imageUrl: wikiItemUrl('Restorative_Shot'), category: 'Weapon', tier: 1 },
  // Weapon Tier 2
  { id: 'active-reload', name: 'Active Reload', imageUrl: wikiItemUrl('Active_Reload'), category: 'Weapon', tier: 2 },
  { id: 'fleetfoot', name: 'Fleetfoot', imageUrl: wikiItemUrl('Fleetfoot'), category: 'Weapon', tier: 2 },
  { id: 'intensifying-magazine', name: 'Intensifying Magazine', imageUrl: wikiItemUrl('Intensifying_Magazine'), category: 'Weapon', tier: 2 },
  { id: 'kinetic-dash', name: 'Kinetic Dash', imageUrl: wikiItemUrl('Kinetic_Dash'), category: 'Weapon', tier: 2 },
  { id: 'long-range', name: 'Long Range', imageUrl: wikiItemUrl('Long_Range'), category: 'Weapon', tier: 2 },
  { id: 'melee-charge', name: 'Melee Charge', imageUrl: wikiItemUrl('Melee_Charge'), category: 'Weapon', tier: 2 },
  { id: 'mystic-shot', name: 'Mystic Shot', imageUrl: wikiItemUrl('Mystic_Shot'), category: 'Weapon', tier: 2 },
  { id: 'berserker', name: 'Berserker', imageUrl: wikiItemUrl('Berserker'), category: 'Weapon', tier: 2 },
  { id: 'burst-fire', name: 'Burst Fire', imageUrl: wikiItemUrl('Burst_Fire'), category: 'Weapon', tier: 2 },
  { id: 'hollow-point', name: 'Hollow Point', imageUrl: wikiItemUrl('Hollow_Point'), category: 'Weapon', tier: 2 },
  { id: 'point-blank', name: 'Point Blank', imageUrl: wikiItemUrl('Point_Blank'), category: 'Weapon', tier: 2 },
  { id: 'sharpshooter', name: 'Sharpshooter', imageUrl: wikiItemUrl('Sharpshooter'), category: 'Weapon', tier: 2 },
  { id: 'tesla-bullets', name: 'Tesla Bullets', imageUrl: wikiItemUrl('Tesla_Bullets'), category: 'Weapon', tier: 2 },
  { id: 'toxic-bullets', name: 'Toxic Bullets', imageUrl: wikiItemUrl('Toxic_Bullets'), category: 'Weapon', tier: 2 },
  // Weapon Tier 3
  { id: 'armor-piercing-rounds', name: 'Armor Piercing Rounds', imageUrl: wikiItemUrl('Armor_Piercing_Rounds'), category: 'Weapon', tier: 3 },
  { id: 'glass-cannon', name: 'Glass Cannon', imageUrl: wikiItemUrl('Glass_Cannon'), category: 'Weapon', tier: 3 },
  { id: 'lucky-shot', name: 'Lucky Shot', imageUrl: wikiItemUrl('Lucky_Shot'), category: 'Weapon', tier: 3 },
  { id: 'ricochet', name: 'Ricochet', imageUrl: wikiItemUrl('Ricochet'), category: 'Weapon', tier: 3 },
  { id: 'silencer', name: 'Silencer', imageUrl: wikiItemUrl('Silencer'), category: 'Weapon', tier: 3 },
  { id: 'spellslinger', name: 'Spellslinger', imageUrl: wikiItemUrl('Spellslinger'), category: 'Weapon', tier: 3 },
  // Vitality Tier 1
  { id: 'extra-health', name: 'Extra Health', imageUrl: wikiItemUrl('Extra_Health'), category: 'Vitality', tier: 1 },
  { id: 'extra-regen', name: 'Extra Regen', imageUrl: wikiItemUrl('Extra_Regen'), category: 'Vitality', tier: 1 },
  { id: 'extra-stamina', name: 'Extra Stamina', imageUrl: wikiItemUrl('Extra_Stamina'), category: 'Vitality', tier: 1 },
  { id: 'healing-rite', name: 'Healing Rite', imageUrl: wikiItemUrl('Healing_Rite'), category: 'Vitality', tier: 1 },
  { id: 'sprint-boots', name: 'Sprint Boots', imageUrl: wikiItemUrl('Sprint_Boots'), category: 'Vitality', tier: 1 },
  // Vitality Tier 2
  { id: 'battle-vest', name: 'Battle Vest', imageUrl: wikiItemUrl('Battle_Vest'), category: 'Vitality', tier: 2 },
  { id: 'bullet-lifesteal', name: 'Bullet Lifesteal', imageUrl: wikiItemUrl('Bullet_Lifesteal'), category: 'Vitality', tier: 2 },
  { id: 'debuff-reducer', name: 'Debuff Reducer', imageUrl: wikiItemUrl('Debuff_Reducer'), category: 'Vitality', tier: 2 },
  { id: 'enduring-speed', name: 'Enduring Speed', imageUrl: wikiItemUrl('Enduring_Speed'), category: 'Vitality', tier: 2 },
  { id: 'healing-booster', name: 'Healing Booster', imageUrl: wikiItemUrl('Healing_Booster'), category: 'Vitality', tier: 2 },
  { id: 'reactive-barrier', name: 'Reactive Barrier', imageUrl: wikiItemUrl('Reactive_Barrier'), category: 'Vitality', tier: 2 },
  { id: 'restorative-locket', name: 'Restorative Locket', imageUrl: wikiItemUrl('Restorative_Locket'), category: 'Vitality', tier: 2 },
  { id: 'return-fire', name: 'Return Fire', imageUrl: wikiItemUrl('Return_Fire'), category: 'Vitality', tier: 2 },
  { id: 'spirit-lifesteal', name: 'Spirit Lifesteal', imageUrl: wikiItemUrl('Spirit_Lifesteal'), category: 'Vitality', tier: 2 },
  // Spirit items
  { id: 'extra-spirit', name: 'Extra Spirit', imageUrl: wikiItemUrl('Extra_Spirit'), category: 'Spirit', tier: 1 },
  { id: 'mystic-burst', name: 'Mystic Burst', imageUrl: wikiItemUrl('Mystic_Burst'), category: 'Spirit', tier: 1 },
  { id: 'ammo-scavenger', name: 'Ammo Scavenger', imageUrl: wikiItemUrl('Ammo_Scavenger'), category: 'Spirit', tier: 1 },
  { id: 'duration-extender', name: 'Duration Extender', imageUrl: wikiItemUrl('Duration_Extender'), category: 'Spirit', tier: 2 },
  { id: 'golden-goose-egg', name: 'Golden Goose Egg', imageUrl: wikiItemUrl('Golden_Goose_Egg'), category: 'Spirit', tier: 3 },
  { id: 'vortex-web', name: 'Vortex Web', imageUrl: wikiItemUrl('Vortex_Web'), category: 'Spirit', tier: 3 },
];

export const getItemByName = (name: string) =>
  items.find(i => i.name.toLowerCase() === name.toLowerCase());
