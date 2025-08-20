import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GorrasModule } from './gorras/gorras.module';
import { MongoModule } from './mongo.module';

@Module({
  imports: [MongoModule, GorrasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
