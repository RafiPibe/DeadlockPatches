// Hero data with local image URLs

export interface Hero {
  id: string;
  name: string;
  imageUrl: string;
}

const h = (id: string, name: string): Hero => ({
  id,
  name,
  imageUrl: `/images/heroes/${id}.png`
});

export const heroes: Hero[] = [
  h('abrams', 'Abrams'),
  h('apollo', 'Apollo'),
  h('bebop', 'Bebop'),
  h('billy', 'Billy'),
  h('calico', 'Calico'),
  h('celeste', 'Celeste'),
  h('the-doorman', 'The Doorman'),
  h('drifter', 'Drifter'),
  h('dynamo', 'Dynamo'),
  h('graves', 'Graves'),
  h('grey-talon', 'Grey Talon'),
  h('haze', 'Haze'),
  h('holliday', 'Holliday'),
  h('infernus', 'Infernus'),
  h('ivy', 'Ivy'),
  h('kelvin', 'Kelvin'),
  h('lady-geist', 'Lady Geist'),
  h('lash', 'Lash'),
  h('mcginnis', 'McGinnis'),
  h('mina', 'Mina'),
  h('mirage', 'Mirage'),
  h('mo-krill', 'Mo & Krill'),
  h('paige', 'Paige'),
  h('paradox', 'Paradox'),
  h('pocket', 'Pocket'),
  h('rem', 'Rem'),
  h('seven', 'Seven'),
  h('shiv', 'Shiv'),
  h('silver', 'Silver'),
  h('sinclair', 'Sinclair'),
  h('venator', 'Venator'),
  h('victor', 'Victor'),
  h('vindicta', 'Vindicta'),
  h('viscous', 'Viscous'),
  h('vyper', 'Vyper'),
  h('warden', 'Warden'),
  h('wraith', 'Wraith'),
  h('yamato', 'Yamato'),
];

export const getHeroById = (id: string): Hero | undefined =>
  heroes.find(h => h.id === id);

export const heroCardUrls: Record<string, string> = Object.fromEntries(
  heroes.map(hero => [hero.id, hero.imageUrl])
);
