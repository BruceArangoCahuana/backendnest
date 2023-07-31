import { Module } from '@nestjs/common';
import { SubgeneralService } from './subgeneral.service';
import { SubgeneralController } from './subgeneral.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subgeneral } from './entities/subgeneral.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subgeneral])],
  controllers: [SubgeneralController],
  providers: [SubgeneralService],
})
export class SubgeneralModule {}
