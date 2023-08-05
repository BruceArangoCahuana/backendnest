import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, Put
} from "@nestjs/common";
import { StudiesService } from './studies.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { IResponse } from '../IResponse.interface';
import { Study } from './entities/study.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('estudios')
@Controller('studies')
export class StudiesController {
  constructor(private readonly studiesService: StudiesService) {}

  @Post('/create')
  create(@Body() createStudyDto: CreateStudyDto): Promise<IResponse<Study>> {
    return this.studiesService.create(createStudyDto);
  }

  @Get('/listar')
  findAll(): Promise<IResponse<Study>> {
    return this.studiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studiesService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateStudyDto: UpdateStudyDto,
  ): Promise<IResponse<Study>> {
    return this.studiesService.update(+id, updateStudyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studiesService.remove(+id);
  }
}
