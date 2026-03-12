import type { PatchNotes } from '../types';

const h = (id: string) => `/images/heroes/${id}.png`;
const i = (id: string) => `/images/items/${id}.png`;

// TODO: Change the export variable name when you add it to your patch array
export const draftPatchNotes: PatchNotes = {
  date: 'YYYY-MM-DD',
  displayDate: 'MM-DD-YYYY',
  generalChanges: [

  ],
  heroBaseChanges: [
    // Move any hero generic changes here manually
  ],
  itemChanges: [
    {
      id: 'golden-goose-egg',
      name: 'Golden Goose Egg',
      imageUrl: i('golden-goose-egg'),
      category: 'Weapon', // IMPORTANT: Change this to 'Vitality' or 'Spirit' manually depending on the item
      changes: [
        { text: "Souls Per Minute increased from 75 to 90", type: 'buff' }
      ],
    },
    {
      id: 'torment-pulse',
      name: 'Torment Pulse',
      imageUrl: i('torment-pulse'),
      category: 'Weapon', // IMPORTANT: Change this to 'Vitality' or 'Spirit' manually depending on the item
      changes: [
        { text: "Pulse Damage reduced from 27+0.25 to 25+0.23", type: 'nerf' }
      ],
    }
  ],
  heroChanges: [
    {
      id: 'doorman',
      name: 'Doorman',
      imageUrl: h('doorman'),
      changes: [
        { text: "Hotel Guest T3 late checkout cooldown increased from 10s to 13s", type: 'nerf' }
      ],
    },
    {
      id: 'ivy',
      name: 'Ivy',
      imageUrl: h('ivy'),
      changes: [
        { text: "Entangling Thorns spirit scaling reduced from 0.55 to 0.45", type: 'nerf' }
      ],
    },
    {
      id: 'paradox',
      name: 'Paradox',
      imageUrl: h('paradox'),
      changes: [
        { text: "Pulse Grenade spirit scaling reduced from 0.4 to 0.3", type: 'nerf' },
        { text: "Time Wall slow duration increased from 1.25s to 2s", type: 'buff' },
        { text: "Time Wall T1 now also increases duration by +2.5s", type: 'neutral' },
        { text: "Time Wall T2 no longer increases duration by +2.5s", type: 'nerf' },
        { text: "Time Wall T2 now also silences enemies for 2.3s", type: 'neutral' },
        { text: "Paradoxical Swap damage changed from 10% Current Health to 125 with 1.1 spirit scaling", type: 'neutral' },
        { text: "Paradoxical Swap T3 changed from 10% Current Health to 10% Max Health", type: 'neutral' },
        { text: "Paradoxical Swap can now be alt casted to swap only a single target with the T3", type: 'neutral' }
      ],
    },
    {
      id: 'silver',
      name: 'Silver',
      imageUrl: h('silver'),
      changes: [
        { text: "Lycan Curse base health bonus increased from +75 to +125", type: 'buff' },
        { text: "Lycan Curse T2 increased from +3m to +4m", type: 'buff' }
      ],
    },
    {
      id: 'viscous',
      name: 'Viscous',
      imageUrl: h('viscous'),
      changes: [
        { text: "Splatter T3 spirit scaling reduced from 1.3 to 1.1", type: 'nerf' },
        { text: "Puddle Punch scaling reduced from 1.1 to 1.0", type: 'nerf' }
      ],
    },
    {
      id: 'wraith',
      name: 'Wraith',
      imageUrl: h('wraith'),
      changes: [
        { text: "Card Trick Spade reduced from +70% to +60%", type: 'nerf' },
        { text: "Card Trick Heart scaling reduced from 1.25 to 1.0", type: 'nerf' },
        { text: "Card Trick T3 Heart scaling increased from 0.5 to 0.75", type: 'buff' },
        { text: "Fixed Card Trick Heart heal doing full value for non-heroes (instead of half)", type: 'fixed' },
        { text: "Telekinesis debuff duration reduced from 3s to 2.75s", type: 'nerf' }
      ],
    }
  ],
};
