import { Injectable } from "@nestjs/common";
import { MongoClient, Collection } from "mongodb";
import * as dotenv from "dotenv";
import { Gorra } from "./gorra.interface";

dotenv.config();

@Injectable()
export class GorrasService {
  private client: MongoClient | null = null;
  private collection: Collection<Gorra> | null = null;

  private async getCollection(): Promise<Collection<Gorra>> {
    if (!this.collection) {
      const uri = process.env.MONGODB_URI;
      const dbName = process.env.MONGODB_DB;

      if (!uri || !dbName) {
        throw new Error("MongoDB configuration not provided");
      }

      this.client = new MongoClient(uri);
      await this.client.connect();
      this.collection = this.client.db(dbName).collection<Gorra>("gorras");
    }

    return this.collection;
  }

  async getGorraById(id: string): Promise<Gorra> {
    const collection = await this.getCollection();
    const gorra = await collection.findOne({ id });

    if (!gorra) {
      throw new Error("No se encontró la gorra");
    }

    await collection.updateOne({ id }, { $inc: { contador: 1 } });

    return { ...gorra, contador: gorra.contador + 1 };
  }
}
