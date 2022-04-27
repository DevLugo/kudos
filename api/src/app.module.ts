import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { KudoModule } from './modules/kudo/kudo.module';

@Module({
  imports: [CoreModule, KudoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
