import { Module } from '@nestjs/common';
import { SolcialnetworksService } from './solcialnetworks.service';
import { SolcialnetworksController } from './solcialnetworks.controller';

@Module({
  controllers: [SolcialnetworksController],
  providers: [SolcialnetworksService]
})
export class SolcialnetworksModule {}
