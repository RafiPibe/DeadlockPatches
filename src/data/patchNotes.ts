import type { PatchNotes } from '../types';

const h = (id: string) => `/images/heroes/${id}.png`;

export const march10_2026: PatchNotes = {
  date: '2026-03-10',
  displayDate: '03-10-2026',
  generalChanges: [
    { text: 'Base Guardians HP reduced from 5500 to 4000', type: 'nerf' },
    { text: 'Zipline can now be captured a little bit more forward towards the enemy base', type: 'neutral' },
    { text: 'The minimum always-captured zipline distance in your base is now reduced inwards', type: 'neutral' },
    { text: 'Super Troopers (when a lane shrine is down) now have 15% less bounty', type: 'nerf' },
    { text: 'Can now jump during slide', type: 'buff' },
    { text: 'Dash jump grants a very brief period with increased air control (30% for 0.25s)', type: 'buff' },
    { text: 'Shrine HP changed from 8100 to 5000/10000 — easier first shrine, harder second', type: 'neutral' },
    { text: 'Shrine attack no longer hits heroes standing under it', type: 'buff' },
    { text: 'Super troopers bonus DPS increased from +40% to +60%', type: 'buff' },
    { text: 'Middle Lane troopers now get upgraded when either shrine dies', type: 'neutral' },
  ],
  heroBaseChanges: [
    { text: 'Hero base health increased by 40', type: 'buff' },
    { text: 'Hero health growth increased by +4 and 8%', type: 'buff' },
    { text: 'Vitality investment bonuses increased by 12%', type: 'buff' },
  ],
  itemChanges: [
    {
      id: 'golden-goose-egg',
      name: 'Golden Goose Egg',
      imageUrl: '/images/items/golden-goose-egg.png',
      category: 'Spirit',
      changes: [
        { text: 'Souls per buff improved from every 200 souls to every 150', type: 'buff' },
      ],
    },
    {
      id: 'vortex-web',
      name: 'Vortex Web',
      imageUrl: '/images/items/vortex-web.png',
      category: 'Spirit',
      changes: [
        { text: 'Will now only unit target when used with alt cast', type: 'neutral' },
      ],
    },
  ],
  heroChanges: [
    {
      id: 'apollo',
      name: 'Apollo',
      imageUrl: h('apollo'),
      changes: [
        { text: "Flawless Advance T3 now also increases Apollo's attacking lunge speed", type: 'buff' },
      ],
    },
    {
      id: 'calico',
      name: 'Calico',
      imageUrl: h('calico'),
      changes: [
        { text: 'Move speed reduced from 7.2 to 6.8', type: 'nerf' },
        { text: 'Fixed Gloom Bombs T2 giving an extra +15 flat bonus', type: 'fixed' },
        { text: 'Leaping Slash scaling reduced from 1.5 to 1.2', type: 'nerf' },
        { text: 'Leaping Slash T2 reduced from 300 Souls to 225', type: 'nerf' },
      ],
    },
    {
      id: 'celeste',
      name: 'Celeste',
      imageUrl: h('celeste'),
      changes: [
        { text: 'Gravity reduced from 28% to 25% (was 20% previous patch)', type: 'buff' },
        { text: 'Air Control increased from 38% to 44% (was 50% previous patch)', type: 'buff' },
        { text: 'Light Eater on-hit damage reduced from 25 to 20', type: 'nerf' },
        { text: 'Dazzling Trick barrier spirit scaling reduced from 1.1 to 0.8', type: 'nerf' },
        { text: 'Shining Wonder no longer refunds half cooldown on miss', type: 'nerf' },
        { text: 'Shining Wonder linger time reduced from 3.25s to 3s', type: 'nerf' },
      ],
    },
    {
      id: 'the-doorman',
      name: 'The Doorman',
      imageUrl: h('the-doorman'),
      changes: [
        { text: 'Call Bell now has Impact Damage (40+1) and Explosion Damage (55+1.7) as separate components again', type: 'neutral' },
        { text: 'Call Bell T2 is now "+30 Impact Damage and +40 Explosion Damage"', type: 'buff' },
        { text: 'Call Bell T3 now also increases slow by 15%', type: 'buff' },
      ],
    },
    {
      id: 'drifter',
      name: 'Drifter',
      imageUrl: h('drifter'),
      changes: [
        { text: 'Fixed Quicksilver Reload dealing bonus multiple times with Rend', type: 'fixed' },
      ],
    },
    {
      id: 'ivy',
      name: 'Ivy',
      imageUrl: h('ivy'),
      changes: [
        { text: 'Bullet damage growth increased from 0.06 to 0.08', type: 'buff' },
        { text: "Kudzu Connection now only gives half the bonus if you aren't connected to an ally", type: 'nerf' },
        { text: 'Air Drop damage spirit scaling reduced from 1 to 0.7', type: 'nerf' },
        { text: 'Air Drop T1 barrier spirit scaling reduced from 1 to 0.7', type: 'nerf' },
        { text: 'Air Drop T2 slow reduced from 50% to 40%', type: 'nerf' },
      ],
    },
    {
      id: 'lash',
      name: 'Lash',
      imageUrl: h('lash'),
      changes: [
        { text: 'Death Slam throw range increased from 12m to 14m', type: 'buff' },
        { text: 'Death Slam throw range now scales with spirit range (+0.14)', type: 'buff' },
        { text: 'Death Slam T3 cast range reduced from +10m to +6m', type: 'nerf' },
        { text: 'Death Slam T3 stun increased from 1s to 1.2s', type: 'buff' },
      ],
    },
    {
      id: 'mcginnis',
      name: 'McGinnis',
      imageUrl: h('mcginnis'),
      changes: [
        { text: 'Heavy Barrage radius reduced from 5m to 4.5m', type: 'nerf' },
        { text: 'Heavy Barrage T1 slow duration reduced from 1.5s to 1s', type: 'nerf' },
        { text: 'Heavy Barrage T3 spirit scaling reduced from +0.25 to +0.2', type: 'nerf' },
        { text: 'Heavy Barrage T3 damage reduced from +25 to +22', type: 'nerf' },
      ],
    },
    {
      id: 'mirage',
      name: 'Mirage',
      imageUrl: h('mirage'),
      changes: [
        { text: 'Fire Scarabs cooldown reduced from 45s to 35s', type: 'buff' },
        { text: 'Traveler T1 now also increases Fire Rate by 20%', type: 'buff' },
      ],
    },
    {
      id: 'mo-krill',
      name: 'Mo & Krill',
      imageUrl: h('mo-krill'),
      changes: [
        { text: 'Scorn heal vs non-heroes reduced from 0.5x to 0.35x', type: 'nerf' },
        { text: 'Scorn cooldown increased from 12.5s to 13s', type: 'nerf' },
        { text: 'Combo DPS reduced from 60 to 45', type: 'nerf' },
        { text: 'Combo cooldown reduced from 150s to 140s', type: 'buff' },
        { text: 'Combo T2 changed from "+60 DPS and +50% Bullet Resist" to "-35s Cooldown and +50% Bullet Resist"', type: 'neutral' },
        { text: 'Combo T3 changed from "+0.7s Duration and -60s Cooldown" to "+0.7s Duration and +60 Damage"', type: 'neutral' },
      ],
    },
    {
      id: 'paradox',
      name: 'Paradox',
      imageUrl: h('paradox'),
      changes: [
        { text: 'Pulse Grenade does half damage to objectives', type: 'nerf' },
      ],
    },
    {
      id: 'pocket',
      name: 'Pocket',
      imageUrl: h('pocket'),
      changes: [
        { text: 'Affliction duration reduced from 12s to 11s (overall total damage reduced slightly)', type: 'nerf' },
        { text: 'Affliction DPS increased from 32+0.2 to 34+0.22', type: 'buff' },
        { text: 'Affliction T2 duration reduced from +4s to +3s', type: 'nerf' },
        { text: 'Affliction T3 DPS increased from 16+0.1 to 18+0.11', type: 'buff' },
      ],
    },
    {
      id: 'seven',
      name: 'Seven',
      imageUrl: h('seven'),
      changes: [
        { text: 'Lightning Ball charge time reduced from 8s to 7s', type: 'buff' },
        { text: 'Storm Cloud T3 increases movement speed from +3m to +4m', type: 'buff' },
      ],
    },
    {
      id: 'shiv',
      name: 'Shiv',
      imageUrl: h('shiv'),
      changes: [
        { text: 'Alt fire knockback increased by 10%', type: 'buff' },
        { text: 'Serrated Knives cooldown increased from 16s to 18s', type: 'nerf' },
        { text: 'Killing Blow range increased from 13m to 18m', type: 'buff' },
        { text: 'Killing Blow travel speed increased', type: 'buff' },
      ],
    },
    {
      id: 'silver',
      name: 'Silver',
      imageUrl: h('silver'),
      changes: [
        { text: 'Lycan Curse cooldown reduced from 50s to 40s', type: 'buff' },
        { text: 'Lycan Curse T1 increased from 15% Resists to 18%', type: 'buff' },
      ],
    },
    {
      id: 'victor',
      name: 'Victor',
      imageUrl: h('victor'),
      changes: [
        { text: 'Pain Battery T3 reduced from 18% Missing Health to 15%', type: 'nerf' },
        { text: 'Jumpstart T3 spirit scaling reduced from 0.8 to 0.6', type: 'nerf' },
        { text: 'Aura of Suffering can now be activated on the zipline', type: 'buff' },
        { text: 'Aura of Suffering radius reduced from 10m to 9.5m', type: 'nerf' },
        { text: 'Aura of Suffering Base and T2 Max DPS and scaling reduced by 10%', type: 'nerf' },
        { text: 'Shocking Reanimation cooldown increased from 190s to 210s', type: 'nerf' },
        { text: 'Shocking Reanimation T3 cooldown reduction increased from -50s to -70s', type: 'buff' },
      ],
    },
    {
      id: 'vindicta',
      name: 'Vindicta',
      imageUrl: h('vindicta'),
      changes: [
        { text: 'Fixed not gaining bonus damage if a proc bonus was the killing blow', type: 'fixed' },
      ],
    },
    {
      id: 'viscous',
      name: 'Viscous',
      imageUrl: h('viscous'),
      changes: [
        { text: 'Fixed Puddle Punch T3 giving an extra +60 melee damage', type: 'fixed' },
        { text: 'Puddle Punch scaling reduced from 1 to 0.8', type: 'nerf' },
      ],
    },
    {
      id: 'warden',
      name: 'Warden',
      imageUrl: h('warden'),
      changes: [
        { text: 'Last Stand Bullet and Spirit Resist while channeling reduced from 60% to 50%', type: 'nerf' },
        { text: 'Last Stand T3 now also increases Bullet and Spirit Resist while channeling by +30%', type: 'buff' },
      ],
    },
    {
      id: 'wraith',
      name: 'Wraith',
      imageUrl: h('wraith'),
      changes: [
        { text: 'Card Trick cooldown increased from 0.5s to 0.6s', type: 'nerf' },
        { text: 'Card Trick Joker no longer bounces to other targets', type: 'nerf' },
        { text: 'Card Trick gaining charges (AP or shop) no longer automatically builds them up', type: 'nerf' },
        { text: 'Card Trick can now be alt casted to fire from the inverse order', type: 'buff' },
        { text: 'Card Trick T3 Spade bonus reduced from +50% to +40%', type: 'nerf' },
        { text: 'Card Trick T3 Heart healing scale reduced from +0.75 to +0.5', type: 'nerf' },
        { text: 'Telekinesis cast range reduced from 14m to 13m', type: 'nerf' },
        { text: 'Telekinesis throw range reduced from 14m to 13m', type: 'nerf' },
        { text: 'Telekinesis cast delay increased from 0.3s to 0.35s', type: 'nerf' },
      ],
    },
  ],
};

export const allPatches = [march10_2026];
export const latestPatch = march10_2026;
