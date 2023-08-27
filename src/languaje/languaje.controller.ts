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
import { LanguajeService } from './languaje.service';
import { CreateLanguajeDto } from './dto/create-languaje.dto';
import { UpdateLanguajeDto } from './dto/update-languaje.dto';
import { IResponse } from '../IResponse.interface';
import { Languaje } from './entities/languaje.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('languaje')
@Controller('languaje')
export class LanguajeController {
  constructor(private readonly languajeService: LanguajeService) {}

  @Post('/create')
  create(
    @Body() createLanguajeDto: CreateLanguajeDto,
  ): Promise<IResponse<Languaje>> {
    return this.languajeService.create(createLanguajeDto);
  }

  @Get('/listar')
  findAll(): Promise<IResponse<Languaje>> {
    return this.languajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languajeService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateLanguajeDto: UpdateLanguajeDto,
  ): Promise<IResponse<any>> {
    return this.languajeService.update(+id, updateLanguajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languajeService.remove(+id);
  }
}
