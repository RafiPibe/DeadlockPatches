// Item data with local image URLs

export interface Item {
  id: string;
  name: string;
  imageUrl: string;
  category: 'Weapon' | 'Vitality' | 'Spirit';
  tier: 1 | 2 | 3 | 4;
}

const w = (id: string, name: string, tier: 1 | 2 | 3 | 4): Item => ({ id, name, imageUrl: `/images/items/${id}.png`, category: 'Weapon', tier });
const v = (id: string, name: string, tier: 1 | 2 | 3 | 4): Item => ({ id, name, imageUrl: `/images/items/${id}.png`, category: 'Vitality', tier });
const s = (id: string, name: string, tier: 1 | 2 | 3 | 4): Item => ({ id, name, imageUrl: `/images/items/${id}.png`, category: 'Spirit', tier });

export const items: Item[] = [
  // Weapon Tier 1
  w('close-quarters', 'Close Quarters', 1),
  w('extended-magazine', 'Extended Magazine', 1),
  w('headshot-booster', 'Headshot Booster', 1),
  w('high-velocity-rounds', 'High-Velocity Rounds', 1),
  w('monster-rounds', 'Monster Rounds', 1),
  w('rapid-rounds', 'Rapid Rounds', 1),
  w('restorative-shot', 'Restorative Shot', 1),
  // Weapon Tier 2
  w('active-reload', 'Active Reload', 2),
  w('fleetfoot', 'Fleetfoot', 2),
  w('intensifying-magazine', 'Intensifying Magazine', 2),
  w('kinetic-dash', 'Kinetic Dash', 2),
  w('long-range', 'Long Range', 2),
  w('melee-charge', 'Melee Charge', 2),
  w('mystic-shot', 'Mystic Shot', 2),
  w('berserker', 'Berserker', 2),
  w('burst-fire', 'Burst Fire', 2),
  w('hollow-point', 'Hollow Point', 2),
  w('point-blank', 'Point Blank', 2),
  w('sharpshooter', 'Sharpshooter', 2),
  w('tesla-bullets', 'Tesla Bullets', 2),
  w('toxic-bullets', 'Toxic Bullets', 2),
  // Weapon Tier 3
  w('armor-piercing-rounds', 'Armor Piercing Rounds', 3),
  w('glass-cannon', 'Glass Cannon', 3),
  w('lucky-shot', 'Lucky Shot', 3),
  w('ricochet', 'Ricochet', 3),
  w('silencer', 'Silencer', 3),
  w('spellslinger', 'Spellslinger', 3),
  
  // Vitality Tier 1
  v('extra-health', 'Extra Health', 1),
  v('extra-regen', 'Extra Regen', 1),
  v('extra-stamina', 'Extra Stamina', 1),
  v('healing-rite', 'Healing Rite', 1),
  v('sprint-boots', 'Sprint Boots', 1),
  // Vitality Tier 2
  v('battle-vest', 'Battle Vest', 2),
  v('bullet-lifesteal', 'Bullet Lifesteal', 2),
  v('debuff-reducer', 'Debuff Reducer', 2),
  v('enduring-speed', 'Enduring Speed', 2),
  v('healing-booster', 'Healing Booster', 2),
  v('reactive-barrier', 'Reactive Barrier', 2),
  v('restorative-locket', 'Restorative Locket', 2),
  v('return-fire', 'Return Fire', 2),
  v('spirit-lifesteal', 'Spirit Lifesteal', 2),
  
  // Spirit Tier 1 & 2 & 3
  s('extra-spirit', 'Extra Spirit', 1),
  s('mystic-burst', 'Mystic Burst', 1),
  s('ammo-scavenger', 'Ammo Scavenger', 1),
  s('duration-extender', 'Duration Extender', 2),
  s('golden-goose-egg', 'Golden Goose Egg', 3),
  s('vortex-web', 'Vortex Web', 3),
];

export const getItemByName = (name: string) =>
  items.find(i => i.name.toLowerCase() === name.toLowerCase());
