import { Module } from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { ProyectController } from './proyect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyect } from './entities/proyect.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proyect])],
  controllers: [ProyectController],
  providers: [ProyectService],
})
export class ProyectModule {}
