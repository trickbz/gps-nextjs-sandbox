import {PrismaClient, Band} from '@prisma/client';

const prismaClientSingleton = () => new PrismaClient();

// TODO: Remember, cool trick
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// Prevent multiple Prisma Client instances in development (due to hot-reloading)
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
