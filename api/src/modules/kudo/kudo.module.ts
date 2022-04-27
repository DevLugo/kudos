import { Module } from '@nestjs/common';
import { KudoService } from './kudo.service';
import { KudoResolver } from './kudo.resolver';
import { PrismaModule } from 'src/core/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [KudoService, KudoResolver],
  imports: [PrismaModule, AuthModule]
})
export class KudoModule {}
