import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GorrasModule } from './gorras/gorras.module';

@Module({
  imports: [GorrasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
