import { Module } from '@nestjs/common';
import { LanguajeService } from './languaje.service';
import { LanguajeController } from './languaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Languaje } from './entities/languaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Languaje])],
  controllers: [LanguajeController],
  providers: [LanguajeService],
})
export class LanguajeModule {}
