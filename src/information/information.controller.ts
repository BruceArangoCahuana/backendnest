import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Put
} from "@nestjs/common";
import { InformationService } from './information.service';
import { CreateInformationDto } from './dto/create-information.dto';
import { UpdateInformationDto } from './dto/update-information.dto';
import { ApiTags } from '@nestjs/swagger';
import { IResponse } from "../IResponse.interface";
import { Information } from "./entities/information.entity";

@ApiTags('information')
@Controller('information')
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @Post('create')
  create(@Body() createInformationDto: CreateInformationDto) {
    return this.informationService.create(createInformationDto);
  }

  @Get('/listar')
  findAll(): Promise<IResponse<Information>> {
    return this.informationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.informationService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateInformationDto: UpdateInformationDto,
  ): Promise<IResponse<any>> {
    return this.informationService.update(+id, updateInformationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informationService.remove(+id);
  }
}
