/* eslint-disable no-console */
import prisma from '../src/lib/db';

async function clearDb() {
  await prisma.albumSong.deleteMany();
  await prisma.band.deleteMany();
  await prisma.instrument.deleteMany();
  await prisma.bandMember.deleteMany();

  console.log('Clearing completed!');
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
      image: 'beatles.jpg',
      members: {
        create: [
          {
            first_name: 'John',
            last_name: 'Lennon',
            image: 'john_lennon.jpg',
            description: 'Rhythm guitarist and lead singer',
            BandMemberInstruments: {
              create: {instrumentId: guitar.id},
            },
          },
          {
            first_name: 'Paul',
            last_name: 'McCartney',
            image: 'paul_mccartney.jpg',
            description: 'Bass guitarist and singer',
            BandMemberInstruments: {
              create: {instrumentId: bass.id},
            },
          },
          {
            first_name: 'George',
            last_name: 'Harrison',
            image: 'george_harrison.jpg',
            description: 'Lead guitarist',
            BandMemberInstruments: {
              create: {instrumentId: guitar.id},
            },
          },
          {
            first_name: 'Ringo',
            last_name: 'Starr',
            image: 'ringo_starr.jpg',
            description: 'Drummer',
            BandMemberInstruments: {
              create: {instrumentId: drums.id},
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
      image: 'doors.jpg',
      members: {
        create: [
          {
            first_name: 'Jim',
            last_name: 'Morrison',
            image: 'jim_morrison.jpg',
            description: 'Lead vocalist',
            BandMemberInstruments: {
              create: {instrumentId: vocals.id},
            },
          },
          {
            first_name: 'Robby',
            last_name: 'Krieger',
            image: 'robby_krieger.jpg',
            description: 'Guitarist',
            BandMemberInstruments: {
              create: {instrumentId: guitar.id},
            },
          },
          {
            first_name: 'Ray',
            last_name: 'Manzarek',
            image: 'ray_manzarek.jpg',
            description: 'Keyboards',
            BandMemberInstruments: {
              create: {instrumentId: keyboards.id},
            },
          },
          {
            first_name: 'John',
            last_name: 'Densmore',
            image: 'john_densmore.jpg',
            description: 'Drummer',
            BandMemberInstruments: {
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
      image: 'black_sabbath.jpg',
      members: {
        create: [
          {
            first_name: 'Ozzy',
            last_name: 'Osbourne',
            image: 'ozzy_osbourne.jpg',
            description: 'Lead vocalist',
            BandMemberInstruments: {
              create: {instrumentId: vocals.id},
            },
          },
          {
            first_name: 'Tony',
            last_name: 'Iommi',
            image: 'tony_iommi.jpg',
            description: 'Guitarist',
            BandMemberInstruments: {
              create: {instrumentId: guitar.id},
            },
          },
          {
            first_name: 'Geezer',
            last_name: 'Butler',
            image: 'geezer_butler.jpg',
            description: 'Bassist',
            BandMemberInstruments: {
              create: {instrumentId: bass.id},
            },
          },
          {
            first_name: 'Bill',
            last_name: 'Ward',
            image: 'bill_ward.jpg',
            description: 'Drummer',
            BandMemberInstruments: {
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

  console.log('Seeding completed!');
}

console.log('Clearing and seeding the database...');
clearDb()
  .then(() => seedDb())
  .catch((e) => {
    console.error('Error in DB operation', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
