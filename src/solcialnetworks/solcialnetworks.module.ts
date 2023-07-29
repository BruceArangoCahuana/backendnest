import { Module } from '@nestjs/common';
import { SolcialnetworksService } from './solcialnetworks.service';
import { SolcialnetworksController } from './solcialnetworks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Solcialnetwork } from './entities/solcialnetwork.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Solcialnetwork])],
  controllers: [SolcialnetworksController],
  providers: [SolcialnetworksService],
})
export class SolcialnetworksModule {}
