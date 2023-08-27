import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { IResponse } from '../IResponse.interface';
import { Proyect } from './entities/proyect.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('proyecto')
@Controller('proyect')
export class ProyectController {
  constructor(private readonly proyectService: ProyectService) {}

  @Post('/create')
  create(
    @Body() createProyectDto: CreateProyectDto,
  ): Promise<IResponse<Proyect>> {
    return this.proyectService.create(createProyectDto);
  }

  @Get('/listar')
  findAll(): Promise<IResponse<Proyect>> {
    return this.proyectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyectService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProyectDto: UpdateProyectDto,
  ): Promise<IResponse<any>> {
    return this.proyectService.update(+id, updateProyectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<IResponse<Proyect>> {
    return this.proyectService.remove(+id);
  }
}
