import { Injectable } from '@nestjs/common';
import { DROPS, DropConfig } from './drops.config';

@Injectable()
export class DropConfigService {
  private readonly dropMap = new Map<string, DropConfig>(
    DROPS.map((d) => [d.slug, d]),
  );

  getDrop(slug: string): DropConfig {
    const drop = this.dropMap.get(slug);
    if (!drop) {
      throw new Error(`Drop ${slug} no configurado`);
    }
    return drop;
  }
}
