import * as mongosse from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongosse> =>
      mongosse.connect(`${process.env.DATABASE_URI}`),
  },
];
