import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Put
} from "@nestjs/common";
import { SubgeneralService } from './subgeneral.service';
import { CreateSubgeneralDto } from './dto/create-subgeneral.dto';
import { UpdateSubgeneralDto } from './dto/update-subgeneral.dto';
import { IResponse } from '../IResponse.interface';
import { Subgeneral } from './entities/subgeneral.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('subgeneral')
@Controller('subgeneral')
export class SubgeneralController {
  constructor(private readonly subgeneralService: SubgeneralService) {}

  @Post('/create')
  create(@Body() createSubgeneralDto: CreateSubgeneralDto) {
    return this.subgeneralService.create(createSubgeneralDto);
  }

  @Get('/listar')
  findAll(): Promise<IResponse<Subgeneral>> {
    return this.subgeneralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subgeneralService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubgeneralDto: UpdateSubgeneralDto,
  ): Promise<IResponse<Subgeneral>> {
    return this.subgeneralService.update(+id, updateSubgeneralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subgeneralService.remove(+id);
  }
}
