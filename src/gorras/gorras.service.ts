import { Injectable, Inject } from '@nestjs/common';
import { Collection } from 'mongodb';
import { Gorra } from './gorra.interface';

@Injectable()
export class GorrasService {
  constructor(
    @Inject('GORRAS_COLLECTION')
    private readonly collection: Collection<Gorra>,
  ) {}

  async getGorraById(id: string): Promise<Gorra> {
    const gorra = await this.collection.findOne({ id });

    if (!gorra) {
      throw new Error('No se encontró la gorra');
    }

    await this.collection.updateOne({ id }, { $inc: { contador: 1 } });

    return { ...gorra, contador: gorra.contador + 1 };
  }
}
