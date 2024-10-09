export type Instrument =
  | 'Guitar'
  | 'Bass'
  | 'Drums'
  | 'Vocals'
  | 'Keyboard'
  | 'Harmonica';

export type Album = {
  id: number;
  title: string;
  releaseDate: string;
  image?: string;
  description?: string;
};

export type BandMember = {
  id: number;
  firstName: string;
  lastName: string;
  instruments: Instrument[];
  image?: string;
  description?: string;
};

export type Band = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  members: BandMember[];
  albums: Album[];
};

export type Auth = {
  email: string;
  password: string;
};

export type User = {
  firstName?: string;
  lastName?: string;
  email: string;
  avatar?: string;
  loggedIn: boolean;
};
