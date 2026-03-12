// Hero data with verified wiki image URLs proxied via /wiki-img to bypass CORS

export interface Hero {
  id: string;
  name: string;
  imageUrl: string;
}

// Proxy prefix for wiki images (routes through Vite devserver proxy → deadlock.wiki)
const card = (hash: string, filename: string, size = 200) =>
  `/wiki-img/images/thumb/${hash}/${filename}/${size}px-${filename}`;

export const heroes: Hero[] = [
  { id: 'abrams', name: 'Abrams', imageUrl: card('6/6d', 'Abrams_card.png') },
  { id: 'apollo', name: 'Apollo', imageUrl: card('0/0f', 'Apollo_card.png') },
  { id: 'bebop', name: 'Bebop', imageUrl: card('4/49', 'Bebop_card.png') },
  { id: 'billy', name: 'Billy', imageUrl: card('e/e5', 'Billy_card.png') },
  { id: 'calico', name: 'Calico', imageUrl: card('e/e4', 'Calico_card.png') },
  { id: 'celeste', name: 'Celeste', imageUrl: card('9/90', 'Celeste_card.png') },
  { id: 'the-doorman', name: 'The Doorman', imageUrl: card('6/6f', 'The_Doorman_card.png') },
  { id: 'drifter', name: 'Drifter', imageUrl: card('4/4d', 'Drifter_card.png') },
  { id: 'dynamo', name: 'Dynamo', imageUrl: card('7/70', 'Dynamo_card.png') },
  { id: 'graves', name: 'Graves', imageUrl: card('3/35', 'Graves_card.png') },
  { id: 'grey-talon', name: 'Grey Talon', imageUrl: card('5/5a', 'Grey_Talon_card.png') },
  { id: 'haze', name: 'Haze', imageUrl: card('1/1b', 'Haze_card.png') },
  { id: 'holliday', name: 'Holliday', imageUrl: card('1/10', 'Holliday_card.png') },
  { id: 'infernus', name: 'Infernus', imageUrl: card('6/6b', 'Infernus_card.png') },
  { id: 'ivy', name: 'Ivy', imageUrl: card('2/2c', 'Ivy_card.png') },
  { id: 'kelvin', name: 'Kelvin', imageUrl: card('7/76', 'Kelvin_card.png') },
  { id: 'lady-geist', name: 'Lady Geist', imageUrl: card('e/e8', 'Lady_Geist_card.png') },
  { id: 'lash', name: 'Lash', imageUrl: card('5/5a', 'Lash_card.png') },
  { id: 'mcginnis', name: 'McGinnis', imageUrl: card('5/55', 'McGinnis_card.png') },
  { id: 'mina', name: 'Mina', imageUrl: card('a/a5', 'Mina_card.png') },
  { id: 'mirage', name: 'Mirage', imageUrl: card('7/77', 'Mirage_card.png') },
  { id: 'mo-krill', name: 'Mo & Krill', imageUrl: '/wiki-img/images/thumb/a/a1/Mo_%26_Krill_card.png/200px-Mo_%26_Krill_card.png' },
  { id: 'paige', name: 'Paige', imageUrl: card('b/b0', 'Paige_card.png') },
  { id: 'paradox', name: 'Paradox', imageUrl: card('0/08', 'Paradox_card.png') },
  { id: 'pocket', name: 'Pocket', imageUrl: card('0/06', 'Pocket_card.png') },
  { id: 'rem', name: 'Rem', imageUrl: card('2/2a', 'Rem_card.png') },
  { id: 'seven', name: 'Seven', imageUrl: card('c/cf', 'Seven_card.png') },
  { id: 'shiv', name: 'Shiv', imageUrl: card('b/b8', 'Shiv_card.png') },
  { id: 'silver', name: 'Silver', imageUrl: card('1/1e', 'Silver_card.png') },
  { id: 'sinclair', name: 'Sinclair', imageUrl: card('4/41', 'Sinclair_card.png') },
  { id: 'venator', name: 'Venator', imageUrl: card('6/6e', 'Venator_card.png') },
  { id: 'victor', name: 'Victor', imageUrl: card('3/3d', 'Victor_card.png') },
  { id: 'vindicta', name: 'Vindicta', imageUrl: card('6/69', 'Vindicta_card.png') },
  { id: 'viscous', name: 'Viscous', imageUrl: card('5/53', 'Viscous_card.png') },
  { id: 'vyper', name: 'Vyper', imageUrl: card('b/bd', 'Vyper_card.png') },
  { id: 'warden', name: 'Warden', imageUrl: card('1/10', 'Warden_card.png') },
  { id: 'wraith', name: 'Wraith', imageUrl: card('8/85', 'Wraith_card.png') },
  { id: 'yamato', name: 'Yamato', imageUrl: card('2/2b', 'Yamato_card.png') },
];

export const getHeroById = (id: string): Hero | undefined =>
  heroes.find(h => h.id === id);

export const heroCardUrls: Record<string, string> = Object.fromEntries(
  heroes.map(h => [h.id, h.imageUrl])
);
