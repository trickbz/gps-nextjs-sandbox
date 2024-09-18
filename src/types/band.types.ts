export type Instrument = 'Guitar' | 'Bass' | 'Drums' | 'Vocals' | 'Keyboard';

export type Album = {
  id: string;
  title: string;
  releaseDate: string;
  image?: string;
  description?: string;
};

export type BandMember = {
  id: string;
  firstName: string;
  lastName: string;
  instruments: Instrument[];
  image: string;
  description?: string;
};

export type Band = {
  id: string;
  name: string;
  description?: string;
  image?: string;
  members: BandMember[];
  albums: Album[];
};
