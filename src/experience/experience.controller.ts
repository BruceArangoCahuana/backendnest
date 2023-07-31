import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Put,
} from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { IResponse } from '../IResponse.interface';
import { Experience } from './entities/experience.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('experience')
@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post('/create')
  create(
    @Body() createExperienceDto: CreateExperienceDto,
  ): Promise<IResponse<Experience>> {
    return this.experienceService.create(createExperienceDto);
  }

  @Get('/listar')
  findAll(): Promise<IResponse<Experience>> {
    return this.experienceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experienceService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateExperienceDto: UpdateExperienceDto,
  ): Promise<IResponse<Experience>> {
    return this.experienceService.update(+id, updateExperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experienceService.remove(+id);
  }
}
