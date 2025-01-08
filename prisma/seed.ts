/* eslint-disable no-console */
import prisma from '../src/lib/db';
import {Logger} from '../src/lib/services/logging.service';

async function clearDb() {
  await prisma.albumSong.deleteMany();
  await prisma.band.deleteMany();
  await prisma.instrument.deleteMany();
  await prisma.bandMember.deleteMany();

  Logger.log('Clearing completed!');
}

async function seedDb() {
  // Instruments
  const guitar = await prisma.instrument.create({data: {name: 'Guitar'}});
  const bass = await prisma.instrument.create({data: {name: 'Bass'}});
  const drums = await prisma.instrument.create({data: {name: 'Drums'}});
  const vocals = await prisma.instrument.create({data: {name: 'Vocals'}});
  const keyboards = await prisma.instrument.create({data: {name: 'Keyboards'}});

  // The Beatles
  await prisma.band.create({
    data: {
      name: 'The Beatles',
      description: 'Legendary British rock band formed in Liverpool in 1960.',
      image: 'http://localhost:8080/public/images/band_beatles.png',
      members: {
        create: [
          {
            firstName: 'John',
            lastName: 'Lennon',
            image: 'john_lennon.jpg',
            description: 'Rhythm guitarist and lead singer',
            instruments: {
              create: [
                {instrumentId: guitar.id},
                {instrumentId: vocals.id},
                {instrumentId: keyboards.id},
              ],
            },
          },
          {
            firstName: 'Paul',
            lastName: 'McCartney',
            image: 'paul_mccartney.jpg',
            description: 'Bass guitarist and singer',
            instruments: {
              create: [
                {instrumentId: bass.id},
                {instrumentId: guitar.id},
                {instrumentId: keyboards.id},
                {instrumentId: vocals.id},
              ],
            },
          },
          {
            firstName: 'George',
            lastName: 'Harrison',
            image: 'george_harrison.jpg',
            description: 'Lead guitarist',
            instruments: {
              create: [{instrumentId: guitar.id}, {instrumentId: vocals.id}],
            },
          },
          {
            firstName: 'Ringo',
            lastName: 'Starr',
            image: 'ringo_starr.jpg',
            description: 'Drummer',
            instruments: {
              create: [{instrumentId: vocals.id}, {instrumentId: drums.id}],
            },
          },
        ],
      },
      albums: {
        create: {
          title: 'Abbey Road',
          image: 'abbey_road.jpg',
          songs: {
            create: [
              {title: 'Come Together', duration: 259},
              {title: 'Something', duration: 183},
            ],
          },
        },
      },
    },
  });

  // The Doors
  await prisma.band.create({
    data: {
      name: 'The Doors',
      description: 'American rock band formed in Los Angeles in 1965.',
      image: 'http://localhost:8080/public/images/band_doors.jpg',
      members: {
        create: [
          {
            firstName: 'Jim',
            lastName: 'Morrison',
            image: 'jim_morrison.jpg',
            description: 'Lead vocalist',
            instruments: {
              create: {instrumentId: vocals.id},
            },
          },
          {
            firstName: 'Robby',
            lastName: 'Krieger',
            image: 'robby_krieger.jpg',
            description: 'Guitarist',
            instruments: {
              create: {instrumentId: guitar.id},
            },
          },
          {
            firstName: 'Ray',
            lastName: 'Manzarek',
            image: 'ray_manzarek.jpg',
            description: 'Keyboards',
            instruments: {
              create: {instrumentId: keyboards.id},
            },
          },
          {
            firstName: 'John',
            lastName: 'Densmore',
            image: 'john_densmore.jpg',
            description: 'Drummer',
            instruments: {
              create: {instrumentId: drums.id},
            },
          },
        ],
      },
      albums: {
        create: {
          title: 'L.A. Woman',
          image: 'la_woman.jpg',
          songs: {
            create: [
              {title: 'Riders on the Storm', duration: 430},
              {title: 'L.A. Woman', duration: 480},
            ],
          },
        },
      },
    },
  });

  // Black Sabbath
  await prisma.band.create({
    data: {
      name: 'Black Sabbath',
      description:
        'English rock band formed in Birmingham in 1968, pioneers of heavy metal.',
      image: 'http://localhost:8080/public/images/band_black_sabbath.webp',
      members: {
        create: [
          {
            firstName: 'Ozzy',
            lastName: 'Osbourne',
            image: 'ozzy_osbourne.jpg',
            description: 'Lead vocalist',
            instruments: {
              create: {instrumentId: vocals.id},
            },
          },
          {
            firstName: 'Tony',
            lastName: 'Iommi',
            image: 'tony_iommi.jpg',
            description: 'Guitarist',
            instruments: {
              create: {instrumentId: guitar.id},
            },
          },
          {
            firstName: 'Geezer',
            lastName: 'Butler',
            image: 'geezer_butler.jpg',
            description: 'Bassist',
            instruments: {
              create: {instrumentId: bass.id},
            },
          },
          {
            firstName: 'Bill',
            lastName: 'Ward',
            image: 'bill_ward.jpg',
            description: 'Drummer',
            instruments: {
              create: {instrumentId: drums.id},
            },
          },
        ],
      },
      albums: {
        create: {
          title: 'Paranoid',
          image: 'paranoid.jpg',
          songs: {
            create: [
              {title: 'War Pigs', duration: 471},
              {title: 'Iron Man', duration: 356},
            ],
          },
        },
      },
    },
  });

  Logger.log('Seeding completed!');
}

Logger.log('Clearing and seeding the database...');
clearDb()
  .then(() => seedDb())
  .catch((e) => {
    Logger.error('Error in DB operation', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
