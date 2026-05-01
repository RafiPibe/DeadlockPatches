// Item data with local image URLs

export interface Item {
  id: string;
  name: string;
  imageUrl: string;
  category: 'Weapon' | 'Vitality' | 'Spirit';
  tier: 1 | 2 | 3 | 4 | 5;
}

const getFileName = (name: string) => {
  let cleaned = name.replace(/ /g, '_');
  if (name === 'Bullet Lifesteal') return 'Bullet_Lifesteal_(item)';
  if (name === 'Spirit Lifesteal') return 'Spirit_Lifesteal_(item)';
  return cleaned;
};

const w = (id: string, name: string, tier: 1 | 2 | 3 | 4 | 5): Item => ({ id, name, imageUrl: `/images/items/Weapon (Orange)/${getFileName(name)}.png`, category: 'Weapon', tier });
const v = (id: string, name: string, tier: 1 | 2 | 3 | 4 | 5): Item => ({ id, name, imageUrl: `/images/items/Vitality (Green)/${getFileName(name)}.png`, category: 'Vitality', tier });
const s = (id: string, name: string, tier: 1 | 2 | 3 | 4 | 5): Item => ({ id, name, imageUrl: `/images/items/Spirit (Purple)/${getFileName(name)}.png`, category: 'Spirit', tier });

export const items: Item[] = [
  // Weapon Tier 1 (800)
  w('close-quarters', 'Close Quarters', 1),
  w('extended-magazine', 'Extended Magazine', 1),
  w('headshot-booster', 'Headshot Booster', 1),
  w('high-velocity-rounds', 'High-Velocity Rounds', 1),
  w('monster-rounds', 'Monster Rounds', 1),
  w('rapid-rounds', 'Rapid Rounds', 1),
  w('restorative-shot', 'Restorative Shot', 1),

  // Weapon Tier 2 (1600)
  w('active-reload', 'Active Reload', 2),
  w('fleetfoot', 'Fleetfoot', 2),
  w('intensifying-magazine', 'Intensifying Magazine', 2),
  w('kinetic-dash', 'Kinetic Dash', 2),
  w('long-range', 'Long Range', 2),
  w('melee-charge', 'Melee Charge', 2),
  w('mystic-shot', 'Mystic Shot', 2),
  w('opening-rounds', 'Opening Rounds', 2),
  w('recharging-rush', 'Recharging Rush', 2),
  w('slowing-bullets', 'Slowing Bullets', 2),
  w('spirit-shredder-bullets', 'Spirit Shredder Bullets', 2),
  w('split-shot', 'Split Shot', 2),
  w('stalker', 'Stalker', 2),
  w('swift-striker', 'Swift Striker', 2),
  w('titanic-magazine', 'Titanic Magazine', 2),
  w('weakening-headshot', 'Weakening Headshot', 2),

  // Weapon Tier 3 (3200)
  w('alchemical-fire', 'Alchemical Fire', 3),
  w('ballistic-enchantment', 'Ballistic Enchantment', 3),
  w('berserker', 'Berserker', 3),
  w('blood-tribute', 'Blood Tribute', 3),
  w('burst-fire', 'Burst Fire', 3),
  w('cultist-sacrifice', 'Cultist Sacrifice', 3),
  w('escalating-resilience', 'Escalating Resilience', 3),
  w('express-shot', 'Express Shot', 3),
  w('headhunter', 'Headhunter', 3),
  w('heroic-aura', 'Heroic Aura', 3),
  w('hollow-point', 'Hollow Point', 3),
  w('hunters-aura', "Hunter's Aura", 3),
  w('point-blank', 'Point Blank', 3),
  w('sharpshooter', 'Sharpshooter', 3),
  w('spirit-rend', 'Spirit Rend', 3),
  w('tesla-bullets', 'Tesla Bullets', 3),
  w('toxic-bullets', 'Toxic Bullets', 3),
  w('weighted-shots', 'Weighted Shots', 3),

  // Weapon Tier 4 (6400)
  w('armor-piercing-rounds', 'Armor Piercing Rounds', 4),
  w('capacitor', 'Capacitor', 4),
  w('crippling-headshot', 'Crippling Headshot', 4),
  w('crushing-fists', 'Crushing Fists', 4),
  w('frenzy', 'Frenzy', 4),
  w('glass-cannon', 'Glass Cannon', 4),
  w('lucky-shot', 'Lucky Shot', 4),
  w('ricochet', 'Ricochet', 4),
  w('shadow-weave', 'Shadow Weave', 4),
  w('silencer', 'Silencer', 4),
  w('spellslinger', 'Spellslinger', 4),
  w('spiritual-overflow', 'Spiritual Overflow', 4),


  // Weapon Tier 5 (Legendary)
  w('haunting-shot', 'Haunting Shot', 5),
  w('infinite-rounds', 'Infinite Rounds', 5),
  w('runed-gauntlets', 'Runed Gauntlets', 5),

  
  // Vitality Tier 1 (800)
  v('extra-health', 'Extra Health', 1),
  v('extra-regen', 'Extra Regen', 1),
  v('extra-stamina', 'Extra Stamina', 1),
  v('healing-rite', 'Healing Rite', 1),
  v('melee-lifesteal', 'Melee Lifesteal', 1),
  v('rebuttal', 'Rebuttal', 1),
  v('sprint-boots', 'Sprint Boots', 1),

  // Vitality Tier 2 (1600)
  v('battle-vest', 'Battle Vest', 2),
  v('bullet-lifesteal', 'Bullet Lifesteal', 2),
  v('debuff-reducer', 'Debuff Reducer', 2),
  v('enchanters-emblem', "Enchanter's Emblem", 2),
  v('enduring-speed', 'Enduring Speed', 2),
  v('guardian-ward', 'Guardian Ward', 2),
  v('healbane', 'Healbane', 2),
  v('healing-booster', 'Healing Booster', 2),
  v('reactive-barrier', 'Reactive Barrier', 2),
  v('restorative-locket', 'Restorative Locket', 2),
  v('return-fire', 'Return Fire', 2),
  v('spirit-lifesteal', 'Spirit Lifesteal', 2),
  v('spirit-shielding', 'Spirit Shielding', 2),
  v('weapon-shielding', 'Weapon Shielding', 2),

  // Vitality Tier 3 (3200)
  v('bullet-resilience', 'Bullet Resilience', 3),
  v('counterspell', 'Counterspell', 3),
  v('dispel-magic', 'Dispel Magic', 3),
  v('fortitude', 'Fortitude', 3),
  v('fury-trance', 'Fury Trance', 3),
  v('healing-nova', 'Healing Nova', 3),
  v('lifestrike', 'Lifestrike', 3),
  v('majestic-leap', 'Majestic Leap', 3),
  v('metal-skin', 'Metal Skin', 3),
  v('rescue-beam', 'Rescue Beam', 3),
  v('spirit-resilience', 'Spirit Resilience', 3),
  v('stamina-mastery', 'Stamina Mastery', 3),
  v('trophy-collector', 'Trophy Collector', 3),
  v('veil-walker', 'Veil Walker', 3),
  v('warp-stone', 'Warp Stone', 3),

  // Vitality Tier 4 (6400)
  v('cheat-death', 'Cheat Death', 4),
  v('colossus', 'Colossus', 4),
  v('divine-barrier', 'Divine Barrier', 4),
  v('diviners-kevlar', "Diviner's Kevlar", 4),
  v('healing-tempo', 'Healing Tempo', 4),
  v('indomitable', 'Indomitable', 4),
  v('infuser', 'Infuser', 4),
  v('inhibitor', 'Inhibitor', 4),
  v('juggernaut', 'Juggernaut', 4),
  v('leech', 'Leech', 4),
  v('phantom-strike', 'Phantom Strike', 4),
  v('plated-armor', 'Plated Armor', 4),
  v('siphon-bullets', 'Siphon Bullets', 4),
  v('spellbreaker', 'Spellbreaker', 4),
  v('unstoppable', 'Unstoppable', 4),
  v('vampiric-burst', 'Vampiric Burst', 4),
  v('witchmail', 'Witchmail', 4),

  // Vitality Tier 5 (Legendary)
  v('celestial-blessing', 'Celestial Blessing', 5),
  v('cloak-of-opportunity', 'Cloak of Opportunity', 5),
  v('electric-slippers', 'Electric Slippers', 5),
  v('eternal-gift', 'Eternal Gift', 5),
  v('nullification-burst', 'Nullification Burst', 5),
  v('seraphim-wings', 'Seraphim Wings', 5),
  v('shadow-strike', 'Shadow Strike', 5),
  // Spirit Tier 1 (800)
  s('extra-charge', 'Extra Charge', 1),
  s('extra-spirit', 'Extra Spirit', 1),
  s('golden-goose-egg', 'Golden Goose Egg', 1),
  s('mystic-burst', 'Mystic Burst', 1),
  s('mystic-expansion', 'Mystic Expansion', 1),
  s('mystic-regeneration', 'Mystic Regeneration', 1),
  s('rusted-barrel', 'Rusted Barrel', 1),
  s('spirit-strike', 'Spirit Strike', 1),
  
  // Spirit Tier 2 (1600)
  s('arcane-surge', 'Arcane Surge', 2),
  s('bullet-resist-shredder', 'Bullet Resist Shredder', 2),
  s('cold-front', 'Cold Front', 2),
  s('compress-cooldown', 'Compress Cooldown', 2),
  s('duration-extender', 'Duration Extender', 2),
  s('improved-spirit', 'Improved Spirit', 2),
  s('mystic-slow', 'Mystic Slow', 2),
  s('mystic-vulnerability', 'Mystic Vulnerability', 2),
  s('quicksilver-reload', 'Quicksilver Reload', 2),
  s('slowing-hex', 'Slowing Hex', 2),
  s('spirit-sap', 'Spirit Sap', 2),
  s('suppressor', 'Suppressor', 2),

  // Spirit Tier 3 (3200)
  s('decay', 'Decay', 3),
  s('disarming-hex', 'Disarming Hex', 3),
  s('greater-expansion', 'Greater Expansion', 3),
  s('knockdown', 'Knockdown', 3),
  s('radiant-regeneration', 'Radiant Regeneration', 3),
  s('rapid-recharge', 'Rapid Recharge', 3),
  s('silence-wave', 'Silence Wave', 3),
  s('spirit-snatch', 'Spirit Snatch', 3),
  s('superior-cooldown', 'Superior Cooldown', 3),
  s('superior-duration', 'Superior Duration', 3),
  s('surge-of-power', 'Surge of Power', 3),
  s('tankbuster', 'Tankbuster', 3),
  s('torment-pulse', 'Torment Pulse', 3),

  // Spirit Tier 4 (6400)
  s('arctic-blast', 'Arctic Blast', 4),
  s('boundless-spirit', 'Boundless Spirit', 4),
  s('cursed-relic', 'Cursed Relic', 4),
  s('echo-shard', 'Echo Shard', 4),
  s('escalating-exposure', 'Escalating Exposure', 4),
  s('ethereal-shift', 'Ethereal Shift', 4),
  s('focus-lens', 'Focus Lens', 4),
  s('lightning-scroll', 'Lightning Scroll', 4),
  s('magic-carpet', 'Magic Carpet', 4),
  s('mercurial-magnum', 'Mercurial Magnum', 4),
  s('mystic-reverb', 'Mystic Reverb', 4),
  s('refresher', 'Refresher', 4),
  s('scourge', 'Scourge', 4),
  s('spirit-burn', 'Spirit Burn', 4),
  s('transcendent-cooldown', 'Transcendent Cooldown', 4),
  s('vortex-web', 'Vortex Web', 4),

  // Spirit Tier 5 (Legendary)
  s('frostbite-charm', 'Frostbite Charm', 5),
  s('mystic-conduit', 'Mystic Conduit', 5),
  s('mystical-piano', 'Mystical Piano', 5),
  s('omnicharge-signet', 'Omnicharge Signet', 5),
  s('prism-blast', 'Prism Blast', 5),
  s('shrink-ray', 'Shrink Ray', 5),
  s('unstable-concoction', 'Unstable Concoction', 5),

];

export const getItemByName = (name: string) =>
  items.find(i => i.name.toLowerCase() === name.toLowerCase());
