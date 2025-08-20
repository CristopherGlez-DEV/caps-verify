import { Module } from '@nestjs/common';
import { GorrasService } from './gorras.service';
import { GorrasController } from './gorras.controller';
import { DropConfigService } from '../drops/drop-config.service';

@Module({
  controllers: [GorrasController],
  providers: [GorrasService, DropConfigService],
})
export class GorrasModule {}
