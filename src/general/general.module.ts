import { Module } from '@nestjs/common';
import { GeneralService } from './general.service';
import { GeneralController } from './general.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { General } from './entities/general.entity';

@Module({
  imports: [TypeOrmModule.forFeature([General])],
  controllers: [GeneralController],
  providers: [GeneralService],
})
export class GeneralModule {}
