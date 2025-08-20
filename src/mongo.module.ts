import { Module, Global } from '@nestjs/common';
import { MongoClient, Collection } from 'mongodb';
import * as dotenv from 'dotenv';
import { Gorra } from './gorras/gorra.interface';

dotenv.config();

@Global()
@Module({
  providers: [
    {
      provide: 'MONGO_CLIENT',
      useFactory: async () => {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
          throw new Error('MONGODB_URI not provided');
        }
        const client = new MongoClient(uri);
        await client.connect();
        return client;
      },
    },
    {
      provide: 'GORRAS_COLLECTION',
      useFactory: (client: MongoClient) => {
        const dbName = process.env.MONGODB_DB;
        if (!dbName) {
          throw new Error('MONGODB_DB not provided');
        }
        return client.db(dbName).collection<Gorra>('gorras');
      },
      inject: ['MONGO_CLIENT'],
    },
  ],
  exports: ['MONGO_CLIENT', 'GORRAS_COLLECTION'],
})
export class MongoModule {}
