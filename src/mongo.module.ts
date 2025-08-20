import { Module, Global } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';
import * as dotenv from 'dotenv';

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

      provide: 'MONGO_DB',
      useFactory: (client: MongoClient): Db => {

        const dbName = process.env.MONGODB_DB;
        if (!dbName) {
          throw new Error('MONGODB_DB not provided');
        }
        return client.db(dbName);
      },
      inject: ['MONGO_CLIENT'],
    },
  ],
  exports: ['MONGO_CLIENT', 'MONGO_DB'],
})
export class MongoModule {}
