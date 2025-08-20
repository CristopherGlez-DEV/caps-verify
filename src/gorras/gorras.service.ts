import { Injectable, Inject } from '@nestjs/common';
import { Db, Collection } from 'mongodb';
import { Gorra } from './gorra.interface';
import { DropConfigService } from '../drops/drop-config.service';

@Injectable()
export class GorrasService {
  constructor(
    @Inject('MONGO_DB') private readonly db: Db,
    private readonly dropConfig: DropConfigService,
  ) {}
  async getGorraById(id: string, dropSlug: string): Promise<Gorra> {
    const drop = this.dropConfig.getDrop(dropSlug);
    const collection: Collection<Gorra> = this.db.collection(drop.collection);
    const gorra = await collection.findOne({ id });

    if (!gorra) {
      throw new Error('No se encontró la gorra');
    }

    await collection.updateOne({ id }, { $inc: { contador: 1 } });

    return { ...gorra, contador: gorra.contador + 1 };
  }
}
