import { Module } from '@nestjs/common';
import { GorrasService } from './gorras.service';
import { GorrasController } from './gorras.controller';

@Module({
  controllers: [GorrasController],
  providers: [GorrasService],
})
export class GorrasModule {}
