import {Prisma} from '@prisma/client';

export type Instrument =
  | 'Guitar'
  | 'Bass'
  | 'Drums'
  | 'Vocals'
  | 'Keyboard'
  | 'Harmonica';

export type BandWithMembers = Prisma.BandGetPayload<{
  include: {
    members: {
      include: {
        instruments: {
          include: {
            Instrument: true;
          };
        };
      };
    };
  };
}>;

export type BandMemberWithInstruments = Prisma.BandMemberGetPayload<{
  include: {
    instruments: {
      include: {
        Instrument: true;
      };
    };
  };
  select: {
    firstName: true;
    lastName: true;
    description: true;
    image: true;
    id: true;
  };
}>;

// TODO: probably I'll need to remove all of them and use type from Prisma insteads
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
