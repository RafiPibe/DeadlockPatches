export type ChangeType = 'buff' | 'nerf' | 'fixed' | 'neutral' | 'new';

export interface Change {
  text: string;
  type: ChangeType;
}

export interface HeroChange {
  id: string;
  name: string;
  imageUrl: string;
  changes: Change[];
}

export interface ItemChange {
  id: string;
  name: string;
  imageUrl: string;
  category: 'Weapon' | 'Vitality' | 'Spirit';
  changes: Change[];
}

export interface GeneralChange {
  text: string;
  type: ChangeType;
  iconUrl?: string;
}

export interface PatchNotes {
  id?: string;
  date: string;
  displayDate: string;
  generalChanges: GeneralChange[];
  heroBaseChanges: GeneralChange[];
  itemChanges: ItemChange[];
  heroChanges: HeroChange[];
}
