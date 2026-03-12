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
    { name: 'Siphon Life', mappedNames: ['siphon life'], iconUrl: '/images/icons/abilities/Abrams/bull_drain_psd.png' },
    { name: 'Shoulder Charge', mappedNames: ['shoulder charge'], iconUrl: '/images/icons/abilities/Abrams/bull_charge_psd.png' },
    { name: 'Seismic Impact', mappedNames: ['seismic impact'], iconUrl: '/images/icons/abilities/Abrams/bull_jump_psd.png' },
    { name: 'Infernal Resilience', mappedNames: ['infernal resilience'], iconUrl: '/images/icons/abilities/Abrams/bull_beef_psd.png' },
  ],
  'apollo': [
    { name: 'Disengaging Sigil', mappedNames: ['disengaging sigil'], iconUrl: '/images/icons/abilities/Apollo/90px-Disengaging_Sigil.png' },
    { name: 'Riposte', mappedNames: ['riposte'], iconUrl: '/images/icons/abilities/Apollo/90px-Riposte.png' },
    { name: 'Flawless Advance', mappedNames: ['flawless advance'], iconUrl: '/images/icons/abilities/Apollo/90px-Flawless_Advance.png' },
    { name: 'Itani Lo Sahn', mappedNames: ['itani lo sahn'], iconUrl: '/images/icons/abilities/Apollo/90px-Itani_Lo_Sahn.png' },
  ],
  'bebop': [
    { name: 'Exploding Uppercut', mappedNames: ['exploding uppercut', 'uppercut'], iconUrl: '/images/icons/abilities/Bebop/bebop_uppercut_psd.png' },
    { name: 'Sticky Bomb', mappedNames: ['sticky bomb'], iconUrl: '/images/icons/abilities/Bebop/bebop_sticky_bomb_psd.png' },
    { name: 'Hook', mappedNames: ['hook'], iconUrl: '/images/icons/abilities/Bebop/bebop_hook_psd.png' },
    { name: 'Hyper Beam', mappedNames: ['hyper beam'], iconUrl: '/images/icons/abilities/Bebop/bebop_hyper_beam_psd.png' },
  ],
  'billy': [
    { name: 'Bashdown', mappedNames: ['bashdown'], iconUrl: '/images/icons/abilities/Billy/90px-Bashdown.png' },
    { name: 'Rising Ram', mappedNames: ['rising ram'], iconUrl: '/images/icons/abilities/Billy/90px-Rising_Ram.png' },
    { name: 'Blasted', mappedNames: ['blasted'], iconUrl: '/images/icons/abilities/Billy/90px-Blasted.png' },
    { name: 'Chain Gang', mappedNames: ['chain gang'], iconUrl: '/images/icons/abilities/Billy/90px-Chain_Gang.png' },
  ],
  'calico': [
    { name: 'Leaping Slash', mappedNames: ['leaping slash', 'dash'], iconUrl: '/images/icons/abilities/Calico/nano_dash_psd.png' },
    { name: 'Gloom Bombs', mappedNames: ['gloom bombs', 'clustergrenade'], iconUrl: '/images/icons/abilities/Calico/nano_clustergrenade_psd.png' },
    { name: 'Shadow Pulse', mappedNames: ['shadow pulse'], iconUrl: '/images/icons/abilities/Calico/nano_shadow_pulse_psd.png' },
    { name: 'Cat Form', mappedNames: ['cat form', 'shadow form'], iconUrl: '/images/icons/abilities/Calico/nano_catform_psd.png' },
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
    { name: 'Kinetic Pulse', mappedNames: ['kinetic pulse'], iconUrl: '/images/icons/abilities/Dynamo/sumo_stomp_psd.png' },
    { name: 'Quantum Entanglement', mappedNames: ['quantum entanglement'], iconUrl: '/images/icons/abilities/Dynamo/sumo_quantum_psd.png' },
    { name: 'Healing Aurora', mappedNames: ['healing aurora'], iconUrl: '/images/icons/abilities/Dynamo/sumo_pork_bun_psd.png' },
    { name: 'Singularity', mappedNames: ['singularity'], iconUrl: '/images/icons/abilities/Dynamo/sumo_vacuum_psd.png' },
  ],
  'graves': [
    { name: 'Jar of Dead', mappedNames: ['jar of dead'], iconUrl: '/images/icons/abilities/Graves/90px-Jar_of_Dead.png' },
    { name: 'Grasping Hands', mappedNames: ['grasping hands'], iconUrl: '/images/icons/abilities/Graves/90px-Grasping_Hands.png' },
    { name: 'Essence Theft', mappedNames: ['essence theft'], iconUrl: '/images/icons/abilities/Graves/90px-Essence_Theft.png' },
    { name: 'Borrowed Decree', mappedNames: ['borrowed decree'], iconUrl: '/images/icons/abilities/Graves/90px-Borrowed_Decree.png' },
  ],
  'grey-talon': [
    { name: 'Charged Shot', mappedNames: ['charged shot'], iconUrl: '/images/icons/abilities/Grey Talon/archer_charged_shot_psd.png' },
    { name: 'Rain of Arrows', mappedNames: ['rain of arrows'], iconUrl: '/images/icons/abilities/Grey Talon/archer_power_jump_psd.png' },
    { name: 'Immobilizing Trap', mappedNames: ['immobilizing trap', 'trap'], iconUrl: '/images/icons/abilities/Grey Talon/imobolize_trap_psd.png' },
    { name: 'Guided Owl', mappedNames: ['guided owl', 'guided arrow'], iconUrl: '/images/icons/abilities/Grey Talon/archer_guided_arrow_psd.png' },
  ],
  'haze': [
    { name: 'Sleep Dagger', mappedNames: ['sleep dagger'], iconUrl: '/images/icons/abilities/Haze/haze_sleep_dagger_psd.png' },
    { name: 'Smoke Bomb', mappedNames: ['smoke bomb'], iconUrl: '/images/icons/abilities/Haze/haze_smoke_bomb_psd.png' },
    { name: 'Fixation', mappedNames: ['fixation'], iconUrl: '/images/icons/abilities/Haze/haze_fixation_psd.png' },
    { name: 'Bullet Dance', mappedNames: ['bullet dance', 'bullet flurry'], iconUrl: '/images/icons/abilities/Haze/haze_bullet_flurry_psd.png' },
  ],
  'holliday': [
    { name: 'Bounce Pad', mappedNames: ['bounce pad'], iconUrl: '/images/icons/abilities/Holliday/bounce_pad_psd.png' },
    { name: 'Gravity Lasso', mappedNames: ['gravity lasso'], iconUrl: '/images/icons/abilities/Holliday/gravity_lasso_psd.png' },
    { name: 'Inferno Bomb', mappedNames: ['inferno bomb'], iconUrl: '/images/icons/abilities/Holliday/inferno_bomb_v2_psd.png' },
    { name: 'Ethereal Bullets', mappedNames: ['ethereal bullets'], iconUrl: '/images/icons/abilities/Holliday/mirage_ethereal_bullets_psd.png' },
  ],
  'infernus': [
    { name: 'Catalyst', mappedNames: ['catalyst'], iconUrl: '/images/icons/abilities/Infernus/inferno_bomb_psd.png' },
    { name: 'Flame Dash', mappedNames: ['flame dash'], iconUrl: '/images/icons/abilities/Infernus/inferno_dash_psd.png' },
    { name: 'Afterburn', mappedNames: ['afterburn'], iconUrl: '/images/icons/abilities/Infernus/inferno_deflect_psd.png' },
    { name: 'Concussive Combustion', mappedNames: ['concussive combustion', 'molotov'], iconUrl: '/images/icons/abilities/Infernus/inferno_molotov_psd.png' },
  ],
  'ivy': [
    { name: 'Entangling Thorns', mappedNames: ['entangling thorns', 'entangling thorn'], iconUrl: '/images/icons/abilities/Ivy/90px-Entangling_Thorns.png' },
    { name: 'Kudzu Connection', mappedNames: ['kudzu connection'], iconUrl: '/images/icons/abilities/Ivy/90px-Kudzu_Connection.png' },
    { name: 'Stone Form', mappedNames: ['stone form'], iconUrl: '/images/icons/abilities/Ivy/90px-Stone_Form.png' },
    { name: 'Air Drop', mappedNames: ['air drop'], iconUrl: '/images/icons/abilities/Ivy/90px-Air_Drop.png' },
  ],
  'kelvin': [
    { name: 'Frost Grenade', mappedNames: ['frost grenade', 'freezing grenade'], iconUrl: '/images/icons/abilities/Kelvin/freezing_grenade_psd.png' },
    { name: 'Ice Path', mappedNames: ['ice path'], iconUrl: '/images/icons/abilities/Kelvin/ice_path_psd.png' },
    { name: 'Arctic Beam', mappedNames: ['arctic beam', 'ice beam'], iconUrl: '/images/icons/abilities/Kelvin/ice_beam_psd.png' },
    { name: 'Frozen Shelter', mappedNames: ['frozen shelter'], iconUrl: '/images/icons/abilities/Kelvin/frozen_shelter_psd.png' },
  ],
  'lady-geist': [
    { name: 'Essence Bomb', mappedNames: ['essence bomb', 'blood bomb'], iconUrl: '/images/icons/abilities/Lady Geist/blood_bomb_psd.png' },
    { name: 'Life Drain', mappedNames: ['life drain'], iconUrl: '/images/icons/abilities/Lady Geist/life_drain_psd.png' },
    { name: 'Malice', mappedNames: ['malice', 'sleep dagger'], iconUrl: '/images/icons/abilities/Lady Geist/haze_sleep_dagger_psd.png' },
    { name: 'Soul Exchange', mappedNames: ['soul exchange', 'blood exchange'], iconUrl: '/images/icons/abilities/Lady Geist/blood_exchange_psd.png' },
  ],
  'lash': [
    { name: 'Ground Strike', mappedNames: ['ground strike', 'lash'], iconUrl: '/images/icons/abilities/Lash/lash_lash_psd.png' },
    { name: 'Grapple', mappedNames: ['grapple', 'whip'], iconUrl: '/images/icons/abilities/Lash/lash_whip_psd.png' },
    { name: 'Flog', mappedNames: ['flog', 'counter lash'], iconUrl: '/images/icons/abilities/Lash/lash_counter_lash_psd.png' },
    { name: 'Death Slam', mappedNames: ['death slam'], iconUrl: '/images/icons/abilities/Lash/lash_death_slam_psd.png' },
  ],
  'mcginnis': [
    { name: 'Mini Turret', mappedNames: ['mini turret', 'turret'], iconUrl: '/images/icons/abilities/McGinnis/engineer_turret_psd.png' },
    { name: 'Medicinal Specter', mappedNames: ['medicinal specter', 'resupply'], iconUrl: '/images/icons/abilities/McGinnis/engineer_resupply_psd.png' },
    { name: 'Spectral Wall', mappedNames: ['spectral wall', 'fissure'], iconUrl: '/images/icons/abilities/McGinnis/engineer_fissure_2_psd.png' },
    { name: 'Heavy Barrage', mappedNames: ['heavy barrage', 'rockets'], iconUrl: '/images/icons/abilities/McGinnis/engineer_rockets_psd.png' },
  ],
  'mina': [
    { name: 'Rake', mappedNames: ['rake'], iconUrl: '/images/icons/abilities/Mina/90px-Rake.png' },
    { name: 'Sanguine Retreat', mappedNames: ['sanguine retreat'], iconUrl: '/images/icons/abilities/Mina/90px-Sanguine_Retreat.png' },
    { name: 'Love Bites', mappedNames: ['love bites'], iconUrl: '/images/icons/abilities/Mina/90px-Love_Bites.png' },
    { name: 'Nox Nostra', mappedNames: ['nox nostra'], iconUrl: '/images/icons/abilities/Mina/90px-Nox_Nostra.png' },
  ],
  'mirage': [
    { name: 'Fire Scarabs', mappedNames: ['fire scarabs', 'fire beetles'], iconUrl: '/images/icons/abilities/Mirage/mirage_fire_beetles_psd.png' },
    { name: 'Sand Phantom', mappedNames: ['sand phantom'], iconUrl: '/images/icons/abilities/Mirage/mirage_sand_phantom_psd.png' },
    { name: 'Tornado', mappedNames: ['tornado'], iconUrl: '/images/icons/abilities/Mirage/mirage_tornado_psd.png' },
    { name: 'Travel', mappedNames: ['teleport', 'travel'], iconUrl: '/images/icons/abilities/Mirage/teleport_icon_psd.png' },
  ],
  'mo-krill': [
    { name: 'Scorn', mappedNames: ['scorn', 'regen'], iconUrl: '/images/icons/abilities/Mo & Krill/grappler_regen_psd.png' },
    { name: 'Burrow', mappedNames: ['burrow', 'spin'], iconUrl: '/images/icons/abilities/Mo & Krill/grappler_spin_psd.png' },
    { name: 'Sand Blast', mappedNames: ['sand blast', 'throw sand'], iconUrl: '/images/icons/abilities/Mo & Krill/grappler_throw_sand_psd.png' },
    { name: 'Combo', mappedNames: ['combo'], iconUrl: '/images/icons/abilities/Mo & Krill/grappler_combo_psd.png' },
  ],
  'paige': [
    { name: 'Bookwyrm', mappedNames: ['bookwyrm'], iconUrl: '/images/icons/abilities/Paige/90px-Bookwyrm.png' },
    { name: 'Plot Armor', mappedNames: ['plot armor'], iconUrl: '/images/icons/abilities/Paige/90px-Plot_Armor.png' },
    { name: 'Captivating Read', mappedNames: ['captivating read'], iconUrl: '/images/icons/abilities/Paige/90px-Captivating_Read.png' },
    { name: 'Rallying Charge', mappedNames: ['rallying charge'], iconUrl: '/images/icons/abilities/Paige/90px-Rallying_Charge.png' },
  ],
  'paradox': [
    { name: 'Pulse Grenade', mappedNames: ['pulse grenade', 'time bomb'], iconUrl: '/images/icons/abilities/Paradox/chrono_time_bomb_psd.png' },
    { name: 'Time Wall', mappedNames: ['time wall'], iconUrl: '/images/icons/abilities/Paradox/chrono_time_wall_psd.png' },
    { name: 'Kinetic Carbine', mappedNames: ['kinetic carbine', 'duo attack'], iconUrl: '/images/icons/abilities/Paradox/duo_attack_psd.png' },
    { name: 'Paradoxical Swap', mappedNames: ['paradoxical swap', 'swap'], iconUrl: '/images/icons/abilities/Paradox/chrono_swap_psd.png' },
  ],
  'pocket': [
    { name: 'Barrage', mappedNames: ['barrage'], iconUrl: '/images/icons/abilities/Pocket/synth_barrage_psd.png' },
    { name: 'Flying Cloak', mappedNames: ['flying cloak', 'pulse'], iconUrl: '/images/icons/abilities/Pocket/synth_pulse_psd.png' },
    { name: 'Enchanter\'s Satchel', mappedNames: ['enchanter\'s satchel', 'enchanters satchel', 'plasma flux'], iconUrl: '/images/icons/abilities/Pocket/synth_plasma_flux_psd.png' },
    { name: 'Affliction', mappedNames: ['affliction'], iconUrl: '/images/icons/abilities/Pocket/synth_affliction_psd.png' },
  ],
  'rem': [
    { name: 'Pillow Toss', mappedNames: ['pillow toss'], iconUrl: '/images/icons/abilities/Rem/90px-Pillow_Toss.png' },
    { name: 'Tag Along', mappedNames: ['tag along'], iconUrl: '/images/icons/abilities/Rem/90px-Tag_Along.png' },
    { name: 'Lil Helpers', mappedNames: ['lil helpers'], iconUrl: '/images/icons/abilities/Rem/90px-Lil_Helpers.png' },
    { name: 'Naptime', mappedNames: ['naptime'], iconUrl: '/images/icons/abilities/Rem/90px-Naptime.png' },
  ],
  'seven': [
    { name: 'Lightning Ball', mappedNames: ['lightning ball', 'giga ball'], iconUrl: '/images/icons/abilities/Seven/giga_ball_psd.png' },
    { name: 'Static Charge', mappedNames: ['static charge', 'giga static'], iconUrl: '/images/icons/abilities/Seven/giga_static_psd.png' },
    { name: 'Power Surge', mappedNames: ['power surge', 'giga chain'], iconUrl: '/images/icons/abilities/Seven/giga_chain_psd.png' },
    { name: 'Storm Cloud', mappedNames: ['storm cloud', 'giga storm'], iconUrl: '/images/icons/abilities/Seven/giga_storm_psd.png' },
  ],
  'shiv': [
    { name: 'Serrated Knives', mappedNames: ['serrated knives', 'flash'], iconUrl: '/images/icons/abilities/Shiv/shiv_flash_psd.png' },
    { name: 'Slice and Dice', mappedNames: ['slice and dice', 'toss'], iconUrl: '/images/icons/abilities/Shiv/shiv_toss_psd.png' },
    { name: 'Bloodletting', mappedNames: ['bloodletting', 'cheat death'], iconUrl: '/images/icons/abilities/Shiv/rutger_cheat_death_psd.png' },
    { name: 'Killing Blow', mappedNames: ['killing blow'], iconUrl: '/images/icons/abilities/Shiv/shiv_killing_blow_psd.png' },
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
    { name: 'Animal Curse', mappedNames: ['animal curse'], iconUrl: '/images/icons/abilities/Sinclair/magician_animalcurse_psd.png' },
    { name: 'Clone Turret', mappedNames: ['clone turret'], iconUrl: '/images/icons/abilities/Sinclair/magician_cloneturret_psd.png' },
    { name: 'Copy Ult', mappedNames: ['copy ult'], iconUrl: '/images/icons/abilities/Sinclair/magician_copyult_psd.png' },
    { name: 'Magic Bolt', mappedNames: ['magic bolt'], iconUrl: '/images/icons/abilities/Sinclair/magician_magicbolt_psd.png' },
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
    { name: 'Stake', mappedNames: ['stake', 'chain'], iconUrl: '/images/icons/abilities/Vindicta/pestilence_chain_psd.png' },
    { name: 'Flight', mappedNames: ['flight'], iconUrl: '/images/icons/abilities/Vindicta/wasp_flight_psd.png' },
    { name: 'Crow Familiar', mappedNames: ['crow familiar', 'crow'], iconUrl: '/images/icons/abilities/Vindicta/hornet_crow_psd.png' },
    { name: 'Assassinate', mappedNames: ['assassinate'], iconUrl: '/images/icons/abilities/Vindicta/hornet_assassinate_psd.png' },
  ],
  'viscous': [
    { name: 'Splatter', mappedNames: ['splatter', 'goo ball'], iconUrl: '/images/icons/abilities/Viscous/viscous_goo_ball_psd.png' },
    { name: 'The Cube', mappedNames: ['the cube', 'cube', 'restorative goo'], iconUrl: '/images/icons/abilities/Viscous/viscous_restorative_goo_psd.png' },
    { name: 'Puddle Punch', mappedNames: ['puddle punch', 'melee'], iconUrl: '/images/icons/abilities/Viscous/damage_melee_psd.png' },
    { name: 'Goo Ball', mappedNames: ['goo ball (ult)', 'sphere'], iconUrl: '/images/icons/abilities/Viscous/viscous_goo_sphere_psd.png' },
  ],
  'vyper': [
    { name: 'Debuff Dagger', mappedNames: ['debuff dagger'], iconUrl: '/images/icons/abilities/Vyper/viper_debuffdagger_psd.png' },
    { name: 'Petrify Bola', mappedNames: ['petrify bola'], iconUrl: '/images/icons/abilities/Vyper/viper_petrifybola_psd.png' },
    { name: 'Snake Dash', mappedNames: ['snake dash'], iconUrl: '/images/icons/abilities/Vyper/viper_snakedash_psd.png' },
    { name: 'Venom', mappedNames: ['venom'], iconUrl: '/images/icons/abilities/Vyper/viper_venom_psd.png' },
  ],
  'warden': [
    { name: 'Alchemical Flask', mappedNames: ['alchemical flask', 'crowd control'], iconUrl: '/images/icons/abilities/Warden/warden_crowd_control_psd.png' },
    { name: 'Willpower', mappedNames: ['willpower', 'high alert'], iconUrl: '/images/icons/abilities/Warden/warden_high_alert_psd.png' },
    { name: 'Binding Word', mappedNames: ['binding word', 'lock down'], iconUrl: '/images/icons/abilities/Warden/warden_lock_down_psd.png' },
    { name: 'Last Stand', mappedNames: ['last stand', 'riot protocol'], iconUrl: '/images/icons/abilities/Warden/warden_riot_protocol_psd.png' },
  ],
  'wraith': [
    { name: 'Card Trick', mappedNames: ['card trick', 'spade', 'heart'], iconUrl: '/images/icons/abilities/Wraith/wraith_card_trick_psd.png' },
    { name: 'Project Mind', mappedNames: ['project mind', 'teleport'], iconUrl: '/images/icons/abilities/Wraith/wraith_teleport_psd.png' },
    { name: 'Full Auto', mappedNames: ['full auto', 'aura'], iconUrl: '/images/icons/abilities/Wraith/wraith_aura_psd.png' },
    { name: 'Telekinesis', mappedNames: ['telekinesis', 'lift'], iconUrl: '/images/icons/abilities/Wraith/wraith_lift_psd.png' },
  ],
  'yamato': [
    { name: 'Power Slash', mappedNames: ['power slash'], iconUrl: '/images/icons/abilities/Yamato/yamato_power_slash_psd.png' },
    { name: 'Flying Strike', mappedNames: ['flying strike'], iconUrl: '/images/icons/abilities/Yamato/yamato_flying_strike_psd.png' },
    { name: 'Crimson Slash', mappedNames: ['crimson slash'], iconUrl: '/images/icons/abilities/Yamato/yamato_crimson_slash_psd.png' },
    { name: 'Shadow Transformation', mappedNames: ['shadow transformation', 'blinding steel'], iconUrl: '/images/icons/abilities/Yamato/yamato_blinding_steel_psd.png' },
  ],
};
