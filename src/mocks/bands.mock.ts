import { Band } from '@/types/band.types';

export const BANDS_MOCK: Band[] = [
  {
    id: 'band-1',
    name: 'The Beatles',
    description: 'An iconic British rock band formed in Liverpool in 1960.',
    image: '/images/beatles.png',
    members: [
      {
        id: 'member-1-1',
        firstName: 'John',
        lastName: 'Lennon',
        instruments: ['Guitar', 'Vocals'],
        image: 'https://example.com/john.jpg',
        description:
          "John Lennon was a founding member of The Beatles and a key figure in the band's success. He was known for his distinctive voice and songwriting skills.",
      },
      {
        id: 'member-1-2',
        firstName: 'Paul',
        lastName: 'McCartney',
        instruments: ['Bass', 'Vocals'],
        image: 'https://example.com/paul.jpg',
        description:
          'Paul McCartney is a legendary musician and songwriter, best known as the bassist and co-lead vocalist for The Beatles.',
      },
      {
        id: 'member-1-3',
        firstName: 'George',
        lastName: 'Harrison',
        instruments: ['Guitar', 'Vocals'],
        image: 'https://example.com/george.jpg',
        description:
          'George Harrison was the lead guitarist of The Beatles, known for his melodic playing and incorporation of Indian music influences.',
      },
      {
        id: 'member-1-4',
        firstName: 'Ringo',
        lastName: 'Starr',
        instruments: ['Drums', 'Vocals'],
        image: 'https://example.com/ringo.jpg',
        description:
          'Ringo Starr was the drummer for The Beatles, known for his steady beats and unique drumming style.',
      },
    ],
    albums: [
      {
        id: 'album-1-1',
        title: 'Abbey Road',
        releaseDate: '1969-09-26',
        image: 'https://example.com/abbeyroad.jpg',
      },
      {
        id: 'album-1-2',
        title: "Sgt. Pepper's Lonely Hearts Club Band",
        releaseDate: '1967-05-26',
        image: 'https://example.com/sgtpepper.jpg',
      },
    ],
  },
  {
    id: 'band-2',
    name: 'Queen',
    description: 'A British rock band formed in London in 1970.',
    image: '/images/beatles.png',
    members: [
      {
        id: 'member-2-1',
        firstName: 'Freddie',
        lastName: 'Mercury',
        instruments: ['Vocals', 'Keyboard'],
        image: 'https://example.com/freddie.jpg',
        description:
          'Freddie Mercury was the charismatic lead vocalist of Queen, known for his powerful voice and dynamic stage presence.',
      },
      {
        id: 'member-2-2',
        firstName: 'Brian',
        lastName: 'May',
        instruments: ['Guitar', 'Vocals'],
        image: 'https://example.com/brian.jpg',
        description:
          'Brian May is the lead guitarist of Queen, recognized for his distinctive guitar sound and technical prowess.',
      },
      {
        id: 'member-2-3',
        firstName: 'Roger',
        lastName: 'Taylor',
        instruments: ['Drums', 'Vocals'],
        image: 'https://example.com/roger.jpg',
        description:
          'Roger Taylor is the drummer for Queen, known for his energetic drumming and vocal contributions.',
      },
      {
        id: 'member-2-4',
        firstName: 'John',
        lastName: 'Deacon',
        instruments: ['Bass'],
        image: 'https://example.com/john.jpg',
        description:
          'John Deacon was the bassist for Queen, known for his solid bass lines and songwriting contributions.',
      },
    ],
    albums: [
      {
        id: 'album-2-1',
        title: 'A Night at the Opera',
        releaseDate: '1975-11-21',
        image: 'https://example.com/anightattheopera.jpg',
      },
      {
        id: 'album-2-2',
        title: 'The Game',
        releaseDate: '1980-06-30',
        image: 'https://example.com/thegame.jpg',
      },
    ],
  },
  {
    id: 'band-3',
    name: 'Nirvana',
    description:
      'An American rock band formed in Aberdeen, Washington, in 1987.',
    image: '/images/beatles.png',
    members: [
      {
        id: 'member-3-1',
        firstName: 'Kurt',
        lastName: 'Cobain',
        instruments: ['Guitar', 'Vocals'],
        image: 'https://example.com/kurt.jpg',
        description:
          'Kurt Cobain was the lead vocalist and guitarist of Nirvana, known for his raw voice and influential songwriting.',
      },
      {
        id: 'member-3-2',
        firstName: 'Krist',
        lastName: 'Novoselic',
        instruments: ['Bass'],
        image: 'https://example.com/krist.jpg',
        description:
          'Krist Novoselic was the bassist for Nirvana, known for his powerful bass lines and stage presence.',
      },
      {
        id: 'member-3-3',
        firstName: 'Dave',
        lastName: 'Grohl',
        instruments: ['Drums'],
        image: 'https://example.com/dave.jpg',
        description:
          'Dave Grohl was the drummer for Nirvana, known for his hard-hitting drumming style and later success with Foo Fighters.',
      },
    ],
    albums: [
      {
        id: 'album-3-1',
        title: 'Nevermind',
        releaseDate: '1991-09-24',
        image: 'https://example.com/nevermind.jpg',
      },
      {
        id: 'album-3-2',
        title: 'In Utero',
        releaseDate: '1993-09-21',
        image: 'https://example.com/inutero.jpg',
      },
    ],
  },
];
