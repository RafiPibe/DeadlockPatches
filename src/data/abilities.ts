export interface AbilityMatch {
  name: string;
  mappedNames: string[]; // Variations of the name to match against patch notes
  iconUrl: string;
}

// for adding new abilities or rewrite
/*

'Hero': [
    { name: '', mappedNames: [''], iconUrl: '/images/icons/abilities/' },
    { name: '', mappedNames: [''], iconUrl: '/images/icons/abilities/' },
    { name: '', mappedNames: [''], iconUrl: '/images/icons/abilities/' },
    { name: '', mappedNames: [''], iconUrl: '/images/icons/abilities/' },
  ],

*/

export const heroAbilities: Record<string, AbilityMatch[]> = {
  'abrams': [
    { name: 'Siphon Life', mappedNames: ['siphon life'], iconUrl: '/images/icons/abilities/90px-Siphon_Life.png' },
    { name: 'Shoulder Charge', mappedNames: ['shoulder charge'], iconUrl: '/images/icons/abilities/90px-Shoulder_Charge.png' },
    { name: 'Seismic Impact', mappedNames: ['seismic impact'], iconUrl: '/images/icons/abilities/90px-Seismic_Impact.png' },
    { name: 'Infernal Resilience', mappedNames: ['infernal resilience'], iconUrl: '/images/icons/abilities/90px-Infernal_Resilience.png' },
  ],
  'apollo': [
    { name: 'Disengaging Sigil', mappedNames: ['disengaging sigil'], iconUrl: '/images/icons/abilities/Apollo/90px-Disengaging_Sigil.png' },
    { name: 'Riposte', mappedNames: ['riposte'], iconUrl: '/images/icons/abilities/Apollo/90px-Riposte.png' },
    { name: 'Flawless Advance', mappedNames: ['flawless advance'], iconUrl: '/images/icons/abilities/Apollo/90px-Flawless_Advance.png' },
    { name: 'Itani Lo Sahn', mappedNames: ['itani lo sahn'], iconUrl: '/images/icons/abilities/Apollo/90px-Itani_Lo_Sahn.png' },
  ],
  'bebop': [
    { name: 'Exploding Uppercut', mappedNames: ['exploding uppercut', 'uppercut'], iconUrl: '/images/icons/abilities/Bebop/90px-Exploding_Uppercut.png' },
    { name: 'Sticky Bomb', mappedNames: ['sticky bomb'], iconUrl: '/images/icons/abilities/Bebop/90px-Sticky_Bomb.png' },
    { name: 'Grapple Arm', mappedNames: ['grapple arm', 'hook'], iconUrl: '/images/icons/abilities/Bebop/90px-Grapple_Arm.png' },
    { name: 'Hyper Beam', mappedNames: ['hyper beam'], iconUrl: '/images/icons/abilities/Bebop/90px-Hyper_Beam.png' },
  ],
  'billy': [
    { name: 'Bashdown', mappedNames: ['bashdown'], iconUrl: '/images/icons/abilities/Billy/90px-Bashdown.png' },
    { name: 'Rising Ram', mappedNames: ['rising ram'], iconUrl: '/images/icons/abilities/Billy/90px-Rising_Ram.png' },
    { name: 'Blasted', mappedNames: ['blasted'], iconUrl: '/images/icons/abilities/Billy/90px-Blasted.png' },
    { name: 'Chain Gang', mappedNames: ['chain gang'], iconUrl: '/images/icons/abilities/Billy/90px-Chain_Gang.png' },
  ],
  'calico': [
    { name: 'Leaping Slash', mappedNames: ['leaping slash', 'dash'], iconUrl: '/images/icons/abilities/Calico/90px-Leaping_Slash.png' },
    { name: 'Gloom Bombs', mappedNames: ['gloom bombs', 'clustergrenade'], iconUrl: '/images/icons/abilities/Calico/90px-Gloom_Bombs.png' },
    { name: 'Return to Shadows', mappedNames: ['return to shadows', 'shadow pulse'], iconUrl: '/images/icons/abilities/Calico/90px-Return_to_Shadows.png' },
    { name: 'Ava', mappedNames: ['cat form', 'shadow form', 'ava'], iconUrl: '/images/icons/abilities/Calico/90px-Ava.png' },
  ],
  'celeste': [
    { name: 'Light Eater', mappedNames: ['light eater'], iconUrl: '/images/icons/abilities/Celeste/90px-Light_Eater.png' },
    { name: 'Dazzling Trick', mappedNames: ['dazzling trick'], iconUrl: '/images/icons/abilities/Celeste/90px-Dazzling_Trick.png' },
    { name: 'Radiant Daggers', mappedNames: ['radiant daggers'], iconUrl: '/images/icons/abilities/Celeste/90px-Radiant_Daggers.png' },
    { name: 'Shining Wonder', mappedNames: ['shining wonder'], iconUrl: '/images/icons/abilities/Celeste/90px-Shining_Wonder.png' },
  ],
  'the-doorman': [
    { name: 'Call Bell', mappedNames: ['call bell'], iconUrl: '/images/icons/abilities/The Doorman/90px-Call_Bell.png' },
    { name: 'Doorway', mappedNames: ['doorway'], iconUrl: '/images/icons/abilities/The Doorman/90px-Doorway.png' },
    { name: 'Luggage Cart', mappedNames: ['luggage cart'], iconUrl: '/images/icons/abilities/The Doorman/90px-Luggage_Cart.png' },
    { name: 'Hotel Guest', mappedNames: ['hotel guest'], iconUrl: '/images/icons/abilities/The Doorman/90px-Hotel_Guest.png' },
  ],
  'drifter': [
    { name: 'Rend', mappedNames: ['rend'], iconUrl: '/images/icons/abilities/Drifter/90px-Rend.png' },
    { name: 'Stalker\'s Mark', mappedNames: ['stalker\'s mark'], iconUrl: '/images/icons/abilities/Drifter/90px-Stalker\'s_Mark.png' },
    { name: 'Bloodscent', mappedNames: ['bloodscent'], iconUrl: '/images/icons/abilities/Drifter/90px-Bloodscent.png' },
    { name: 'Eternal Night', mappedNames: ['eternal night'], iconUrl: '/images/icons/abilities/Drifter/90px-Eternal_Night.png' },
  ],
  'dynamo': [
    { name: 'Kinetic Pulse', mappedNames: ['kinetic pulse'], iconUrl: '/images/icons/abilities/Dynamo/90px-Kinetic_Pulse.png' },
    { name: 'Quantum Entanglement', mappedNames: ['quantum entanglement'], iconUrl: '/images/icons/abilities/Dynamo/90px-Quantum_Entanglement.png' },
    { name: 'Healing Aurora', mappedNames: ['healing aurora'], iconUrl: '/images/icons/abilities/Dynamo/90px-Healing_Aurora.png' },
    { name: 'Singularity', mappedNames: ['singularity'], iconUrl: '/images/icons/abilities/Dynamo/90px-Singularity.png' },
  ],
  'graves': [
    { name: 'Jar of Dead', mappedNames: ['jar of dead'], iconUrl: '/images/icons/abilities/Graves/90px-Jar_of_Dead.png' },
    { name: 'Grasping Hands', mappedNames: ['grasping hands'], iconUrl: '/images/icons/abilities/Graves/90px-Grasping_Hands.png' },
    { name: 'Essence Theft', mappedNames: ['essence theft'], iconUrl: '/images/icons/abilities/Graves/90px-Essence_Theft.png' },
    { name: 'Borrowed Decree', mappedNames: ['borrowed decree'], iconUrl: '/images/icons/abilities/Graves/90px-Borrowed_Decree.png' },
  ],
  'grey-talon': [
    { name: 'Charged Shot', mappedNames: ['charged shot'], iconUrl: '/images/icons/abilities/Grey Talon/90px-Charged_Shot.png' },
    { name: 'Rain of Arrows', mappedNames: ['rain of arrows'], iconUrl: '/images/icons/abilities/Grey Talon/90px-Rain_of_Arrows.png' },
    { name: 'Spirit Snare ', mappedNames: ['spirit snare', 'immobilizing trap', 'trap'], iconUrl: '/images/icons/abilities/Grey Talon/90px-Spirit_Snare.png' },
    { name: 'Guided Owl', mappedNames: ['guided owl', 'guided arrow'], iconUrl: '/images/icons/abilities/Grey Talon/90px-Guided_Owl.png' },
  ],
  'haze': [
    { name: 'Sleep Dagger', mappedNames: ['sleep dagger'], iconUrl: '/images/icons/abilities/Haze/90px-Sleep_Dagger.png' },
    { name: 'Smoke Bomb', mappedNames: ['smoke bomb'], iconUrl: '/images/icons/abilities/Haze/90px-Smoke_Bomb.png' },
    { name: 'Fixation', mappedNames: ['fixation'], iconUrl: '/images/icons/abilities/Haze/90px-Fixation.png' },
    { name: 'Bullet Dance', mappedNames: ['bullet dance', 'bullet flurry'], iconUrl: '/images/icons/abilities/Haze/90px-Bullet_Dance.png' },
  ],
  'holliday': [
    { name: 'Bounce Pad', mappedNames: ['bounce pad'], iconUrl: '/images/icons/abilities/Holliday/90px-Bounce_Pad.png' },
    { name: 'Crackshot', mappedNames: ['crackshot'], iconUrl: '/images/icons/abilities/Holliday/90px-Crackshot.png' },
    { name: 'Powder Keg', mappedNames: ['powder keg'], iconUrl: '/images/icons/abilities/Holliday/90px-Powder_Keg.png' },
    { name: 'Spirit Lasso', mappedNames: ['spirit lasso'], iconUrl: '/images/icons/abilities/Holliday/90px-Spirit_Lasso.png' },
  ],
  'infernus': [
    { name: 'Napalm', mappedNames: ['catalyst', 'napalm'], iconUrl: '/images/icons/abilities/Infernus/90px-Napalm.png' },
    { name: 'Flame Dash', mappedNames: ['flame dash'], iconUrl: '/images/icons/abilities/Infernus/90px-Flame_Dash.png' },
    { name: 'Afterburn', mappedNames: ['afterburn'], iconUrl: '/images/icons/abilities/Infernus/90px-Afterburn.png' },
    { name: 'Concussive Combustion', mappedNames: ['concussive combustion', 'molotov'], iconUrl: '/images/icons/abilities/Infernus/90px-Concussive_Combustion.png' },
  ],
  'ivy': [
    { name: 'Entangling Thorns', mappedNames: ['entangling thorns', 'entangling thorn'], iconUrl: '/images/icons/abilities/Ivy/90px-Entangling_Thorns.png' },
    { name: 'Kudzu Connection', mappedNames: ['kudzu connection'], iconUrl: '/images/icons/abilities/Ivy/90px-Kudzu_Connection.png' },
    { name: 'Stone Form', mappedNames: ['stone form'], iconUrl: '/images/icons/abilities/Ivy/90px-Stone_Form.png' },
    { name: 'Air Drop', mappedNames: ['air drop'], iconUrl: '/images/icons/abilities/Ivy/90px-Air_Drop.png' },
  ],
  'kelvin': [
    { name: 'Frost Grenade', mappedNames: ['frost grenade', 'freezing grenade'], iconUrl: '/images/icons/abilities/Kelvin/90px-Frost_Grenade.png' },
    { name: 'Ice Path', mappedNames: ['ice path'], iconUrl: '/images/icons/abilities/Kelvin/90px-Ice_Path.png' },
    { name: 'Arctic Beam', mappedNames: ['arctic beam', 'ice beam'], iconUrl: '/images/icons/abilities/Kelvin/90px-Arctic_Beam.png' },
    { name: 'Frozen Shelter', mappedNames: ['frozen shelter'], iconUrl: '/images/icons/abilities/Kelvin/90px-Frozen_Shelter.png' },
  ],
  'lady-geist': [
    { name: 'Essence Bomb', mappedNames: ['essence bomb', 'blood bomb'], iconUrl: '/images/icons/abilities/Lady Geist/90px-Essence_Bomb.png' },
    { name: 'Life Drain', mappedNames: ['life drain'], iconUrl: '/images/icons/abilities/Lady Geist/90px-Life_Drain.png' },
    { name: 'Malice', mappedNames: ['malice', 'sleep dagger'], iconUrl: '/images/icons/abilities/Lady Geist/90px-Malice.png' },
    { name: 'Soul Exchange', mappedNames: ['soul exchange', 'blood exchange'], iconUrl: '/images/icons/abilities/Lady Geist/90px-Soul_Exchange.png' },
  ],
  'lash': [
    { name: 'Ground Strike', mappedNames: ['ground strike', 'lash'], iconUrl: '/images/icons/abilities/Lash/90px-Ground_Strike.png' },
    { name: 'Grapple', mappedNames: ['grapple', 'whip'], iconUrl: '/images/icons/abilities/Lash/90px-Grapple.png' },
    { name: 'Flog', mappedNames: ['flog', 'counter lash'], iconUrl: '/images/icons/abilities/Lash/90px-Flog.png' },
    { name: 'Death Slam', mappedNames: ['death slam'], iconUrl: '/images/icons/abilities/Lash/90px-Death_Slam.png' },
  ],
  'mcginnis': [
    { name: 'Mini Turret', mappedNames: ['mini turret', 'turret'], iconUrl: '/images/icons/abilities/McGinnis/90px-Mini_Turret.png' },
    { name: 'Medicinal Specter', mappedNames: ['medicinal specter', 'resupply'], iconUrl: '/images/icons/abilities/McGinnis/90px-Medicinal_Specter.png' },
    { name: 'Spectral Wall', mappedNames: ['spectral wall', 'fissure'], iconUrl: '/images/icons/abilities/McGinnis/90px-Spectral_Wall.png' },
    { name: 'Heavy Barrage', mappedNames: ['heavy barrage', 'rockets'], iconUrl: '/images/icons/abilities/McGinnis/90px-Heavy_Barrage.png' },
  ],
  'mina': [
    { name: 'Rake', mappedNames: ['rake'], iconUrl: '/images/icons/abilities/Mina/90px-Rake.png' },
    { name: 'Sanguine Retreat', mappedNames: ['sanguine retreat'], iconUrl: '/images/icons/abilities/Mina/90px-Sanguine_Retreat.png' },
    { name: 'Love Bites', mappedNames: ['love bites'], iconUrl: '/images/icons/abilities/Mina/90px-Love_Bites.png' },
    { name: 'Nox Nostra', mappedNames: ['nox nostra'], iconUrl: '/images/icons/abilities/Mina/90px-Nox_Nostra.png' },
  ],
  'mirage': [
    { name: 'Fire Scarabs', mappedNames: ['fire scarabs', 'fire beetles'], iconUrl: '/images/icons/abilities/Mirage/90px-Fire_Scarabs.png' },
    { name: 'Dust Devil', mappedNames: ['dust devil'], iconUrl: '/images/icons/abilities/Mirage/90px-Dust_Devil.png' },
    { name: 'Djinn\'s Mark', mappedNames: ['djinn\'s mark'], iconUrl: '/images/icons/abilities/Mirage/90px-Djinn\'s_Mark.png' },
    { name: 'Traveler', mappedNames: ['traveler'], iconUrl: '/images/icons/abilities/Mirage/90px-Traveler.png' },
  ],
  'mo-krill': [
    { name: 'Scorn', mappedNames: ['scorn', 'regen'], iconUrl: '/images/icons/abilities/Mo & Krill/90px-Scorn.png' },
    { name: 'Burrow', mappedNames: ['burrow', 'spin'], iconUrl: '/images/icons/abilities/Mo & Krill/90px-Burrow.png' },
    { name: 'Sand Blast', mappedNames: ['sand blast', 'throw sand'], iconUrl: '/images/icons/abilities/Mo & Krill/90px-Sand_Blast.png' },
    { name: 'Combo', mappedNames: ['combo'], iconUrl: '/images/icons/abilities/Mo & Krill/90px-Combo.png' },
  ],
  'paige': [
    { name: 'Bookwyrm', mappedNames: ['bookwyrm'], iconUrl: '/images/icons/abilities/Paige/90px-Bookwyrm.png' },
    { name: 'Plot Armor', mappedNames: ['plot armor'], iconUrl: '/images/icons/abilities/Paige/90px-Plot_Armor.png' },
    { name: 'Captivating Read', mappedNames: ['captivating read'], iconUrl: '/images/icons/abilities/Paige/90px-Captivating_Read.png' },
    { name: 'Rallying Charge', mappedNames: ['rallying charge'], iconUrl: '/images/icons/abilities/Paige/90px-Rallying_Charge.png' },
  ],
  'paradox': [
    { name: 'Pulse Grenade', mappedNames: ['pulse grenade', 'time bomb'], iconUrl: '/images/icons/abilities/Paradox/90px-Pulse_Grenade.png' },
    { name: 'Time Wall', mappedNames: ['time wall'], iconUrl: '/images/icons/abilities/Paradox/90px-Time_Wall.png' },
    { name: 'Kinetic Carbine', mappedNames: ['kinetic carbine', 'duo attack'], iconUrl: '/images/icons/abilities/Paradox/90px-Kinetic_Carbine.png' },
    { name: 'Paradoxical Swap', mappedNames: ['paradoxical swap', 'swap'], iconUrl: '/images/icons/abilities/Paradox/90px-Paradoxical_Swap.png' },
  ],
  'pocket': [
    { name: 'Barrage', mappedNames: ['barrage'], iconUrl: '/images/icons/abilities/Pocket/90px-Barrage.png' },
    { name: 'Flying Cloak', mappedNames: ['flying cloak', 'pulse'], iconUrl: '/images/icons/abilities/Pocket/90px-Flying_Cloak.png' },
    { name: 'Enchanter\'s Satchel', mappedNames: ['enchanter\'s satchel', 'enchanters satchel', 'plasma flux'], iconUrl: '/images/icons/abilities/Pocket/90px-Enchanter\'s_Satchel.png' },
    { name: 'Affliction', mappedNames: ['affliction'], iconUrl: '/images/icons/abilities/Pocket/90px-Affliction.png' },
  ],
  'rem': [
    { name: 'Pillow Toss', mappedNames: ['pillow toss'], iconUrl: '/images/icons/abilities/Rem/90px-Pillow_Toss.png' },
    { name: 'Tag Along', mappedNames: ['tag along'], iconUrl: '/images/icons/abilities/Rem/90px-Tag_Along.png' },
    { name: 'Lil Helpers', mappedNames: ['lil helpers'], iconUrl: '/images/icons/abilities/Rem/90px-Lil_Helpers.png' },
    { name: 'Naptime', mappedNames: ['naptime'], iconUrl: '/images/icons/abilities/Rem/90px-Naptime.png' },
  ],
  'seven': [
    { name: 'Lightning Ball', mappedNames: ['lightning ball', 'giga ball'], iconUrl: '/images/icons/abilities/Seven/90px-Lightning_Ball.png' },
    { name: 'Static Charge', mappedNames: ['static charge', 'giga static'], iconUrl: '/images/icons/abilities/Seven/90px-Static_Charge.png' },
    { name: 'Power Surge', mappedNames: ['power surge', 'giga chain'], iconUrl: '/images/icons/abilities/Seven/90px-Power_Surge.png' },
    { name: 'Storm Cloud', mappedNames: ['storm cloud', 'giga storm'], iconUrl: '/images/icons/abilities/Seven/90px-Storm_Cloud.png' },
  ],
  'shiv': [
    { name: 'Serrated Knives', mappedNames: ['serrated knives', 'flash'], iconUrl: '/images/icons/abilities/Shiv/90px-Serrated_Knives.png' },
    { name: 'Slice and Dice', mappedNames: ['slice and dice', 'toss'], iconUrl: '/images/icons/abilities/Shiv/90px-Slice_and_Dice.png' },
    { name: 'Bloodletting', mappedNames: ['bloodletting', 'cheat death'], iconUrl: '/images/icons/abilities/Shiv/90px-Bloodletting.png' },
    { name: 'Killing Blow', mappedNames: ['killing blow'], iconUrl: '/images/icons/abilities/Shiv/90px-Killing_Blow.png' },
  ],
  'silver': [
    { name: 'Slam Fire', mappedNames: ['slam fire'], iconUrl: '/images/icons/abilities/Silver/90px-Slam_Fire.png' },
    { name: 'Boot Kick', mappedNames: ['boot kick'], iconUrl: '/images/icons/abilities/Silver/90px-Boot_Kick.png' },
    { name: 'Entangling Bola', mappedNames: ['entangling bola'], iconUrl: '/images/icons/abilities/Silver/90px-Entangling_Bola.png' },
    { name: 'Lycan Curses', mappedNames: ['lycan curses', 'lycan curse'], iconUrl: '/images/icons/abilities/Silver/90px-Lycan_Curse.png' },
    { name: 'Go For The Throat', mappedNames: ['go for the throat'], iconUrl: '/images/icons/abilities/Silver/90px-Go_For_The_Throat.png' },
    { name: 'Mauling Leap', mappedNames: ['mauling leap'], iconUrl: '/images/icons/abilities/Silver/90px-Mauling_Leap.png' },
    { name: 'Tail Whack', mappedNames: ['tail whack'], iconUrl: '/images/icons/abilities/Silver/90px-Tail_Whack.png' },
  ],
  'sinclair': [
    { name: 'Vexing Bolt', mappedNames: ['vexing bolt'], iconUrl: '/images/icons/abilities/Sinclair/90px-Vexing_Bolt.png' },
    { name: 'Spectral Assistant', mappedNames: ['spectral assistant'], iconUrl: '/images/icons/abilities/Sinclair/90px-Spectral_Assistant.png' },
    { name: 'Rabbit Hex', mappedNames: ['rabbit hex'], iconUrl: '/images/icons/abilities/Sinclair/90px-Rabbit_Hex.png' },
    { name: 'Audience Participation', mappedNames: ['audience participation'], iconUrl: '/images/icons/abilities/Sinclair/90px-Audience_Participation.png' },
  ],
  'venator': [
    { name: 'Consecrating Grenade', mappedNames: ['consecrating grenade'], iconUrl: '/images/icons/abilities/Venator/90px-Consecrating_Grenade.png' },
    { name: 'Gutshot', mappedNames: ['gutshot'], iconUrl: '/images/icons/abilities/Venator/90px-Gutshot.png' },
    { name: 'Hex-Lined Snap Trap', mappedNames: ['hex-lined snap trap'], iconUrl: '/images/icons/abilities/Venator/90px-Hex-Lined_Snap_Trap.png' },
    { name: 'Ira Domini', mappedNames: ['ira domini'], iconUrl: '/images/icons/abilities/Venator/90px-Ira_Domini.png' },
  ],
  'victor': [
    { name: 'Pain Battery', mappedNames: ['pain battery'], iconUrl: '/images/icons/abilities/Victor/90px-Pain_Battery.png' },
    { name: 'Jumpstart', mappedNames: ['jumpstart'], iconUrl: '/images/icons/abilities/Victor/90px-Jumpstart.png' },
    { name: 'Aura of Suffering', mappedNames: ['aura of suffering'], iconUrl: '/images/icons/abilities/Victor/90px-Aura_of_Suffering.png' },
    { name: 'Shocking Reanimation', mappedNames: ['shocking reanimation'], iconUrl: '/images/icons/abilities/Victor/90px-Shocking_Reanimation.png' },
  ],
  'vindicta': [
    { name: 'Stake', mappedNames: ['stake', 'chain'], iconUrl: '/images/icons/abilities/Vindicta/90px-Stake.png' },
    { name: 'Flight', mappedNames: ['flight'], iconUrl: '/images/icons/abilities/Vindicta/90px-Flight.png' },
    { name: 'Crow Familiar', mappedNames: ['crow familiar', 'crow'], iconUrl: '/images/icons/abilities/Vindicta/90px-Crow_Familiar.png' },
    { name: 'Assassinate', mappedNames: ['assassinate'], iconUrl: '/images/icons/abilities/Vindicta/90px-Assassinate.png' },
  ],
  'viscous': [
    { name: 'Splatter', mappedNames: ['splatter', 'goo ball'], iconUrl: '/images/icons/abilities/Viscous/90px-Splatter.png' },
    { name: 'The Cube', mappedNames: ['the cube', 'cube', 'restorative goo'], iconUrl: '/images/icons/abilities/Viscous/90px-The_Cube.png' },
    { name: 'Puddle Punch', mappedNames: ['puddle punch', 'melee'], iconUrl: '/images/icons/abilities/Viscous/90px-Puddle_Punch.png' },
    { name: 'Goo Ball', mappedNames: ['goo ball (ult)', 'sphere'], iconUrl: '/images/icons/abilities/Viscous/90px-Goo_Ball.png' },
  ],
  'vyper': [
    { name: 'Screwjab Dagger', mappedNames: ['screwjab dagger'], iconUrl: '/images/icons/abilities/Vyper/90px-Screwjab_Dagger.png' },
    { name: 'Lethal Venom', mappedNames: ['lethal venom'], iconUrl: '/images/icons/abilities/Vyper/90px-Lethal_Venom.png' },
    { name: 'Slither', mappedNames: ['slither'], iconUrl: '/images/icons/abilities/Vyper/90px-Slither.png' },
    { name: 'Petrifying Bola', mappedNames: ['petrifying bola'], iconUrl: '/images/icons/abilities/Vyper/90px-Petrifying_Bola.png' },
  ],
  'warden': [
    { name: 'Alchemical Flask', mappedNames: ['alchemical flask', 'crowd control'], iconUrl: '/images/icons/abilities/Warden/90px-Alchemical_Flask.png' },
    { name: 'Willpower', mappedNames: ['willpower', 'high alert'], iconUrl: '/images/icons/abilities/Warden/90px-Willpower.png' },
    { name: 'Binding Word', mappedNames: ['binding word', 'lock down'], iconUrl: '/images/icons/abilities/Warden/90px-Binding_Word.png' },
    { name: 'Last Stand', mappedNames: ['last stand', 'riot protocol'], iconUrl: '/images/icons/abilities/Warden/90px-Last_Stand.png' },
  ],
  'wraith': [
    { name: 'Card Trick', mappedNames: ['card trick', 'spade', 'heart'], iconUrl: '/images/icons/abilities/Wraith/90px-Card_Trick.png' },
    { name: 'Project Mind', mappedNames: ['project mind', 'teleport'], iconUrl: '/images/icons/abilities/Wraith/90px-Project_Mind.png' },
    { name: 'Full Auto', mappedNames: ['full auto', 'aura'], iconUrl: '/images/icons/abilities/Wraith/90px-Full_Auto.png' },
    { name: 'Telekinesis', mappedNames: ['telekinesis', 'lift'], iconUrl: '/images/icons/abilities/Wraith/90px-Telekinesis.png' },
  ],
  'yamato': [
    { name: 'Power Slash', mappedNames: ['power slash'], iconUrl: '/images/icons/abilities/Yamato/90px-Power_Slash.png' },
    { name: 'Flying Slash', mappedNames: ['flying strike', 'flying slash'], iconUrl: '/images/icons/abilities/Yamato/90px-Flying_Slash.png' },
    { name: 'Crimson Slash', mappedNames: ['crimson slash'], iconUrl: '/images/icons/abilities/Yamato/90px-Crimson_Slash.png' },
    { name: 'Shadow Transformation', mappedNames: ['shadow transformation', 'blinding steel'], iconUrl: '/images/icons/abilities/Yamato/90px-Shadow_Transformation.png' },
  ],
};
