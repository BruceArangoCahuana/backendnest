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
import { IconService } from './icon.service';
import { CreateIconDto } from './dto/create-icon.dto';
import { UpdateIconDto } from './dto/update-icon.dto';
import { IResponse } from '../IResponse.interface';
import { Icon } from './entities/icon.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('icono')
@Controller('icon')
export class IconController {
  constructor(private readonly iconService: IconService) {}

  @Post('/create')
  create(@Body() createIconDto: CreateIconDto): Promise<IResponse<any>> {
    return this.iconService.create(createIconDto);
  }

  @Get('/listar')
  findAll(): Promise<IResponse<Icon>> {
    return this.iconService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iconService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateIconDto: UpdateIconDto,
  ): Promise<IResponse<any>> {
    return this.iconService.update(+id, updateIconDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<IResponse<any>> {
    return this.iconService.remove(+id);
  }
}
