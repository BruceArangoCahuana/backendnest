import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe, Put
} from "@nestjs/common";
import { GeneralService } from './general.service';
import { CreateGeneralDto } from './dto/create-general.dto';
import { UpdateGeneralDto } from './dto/update-general.dto';
import { IResponse } from '../IResponse.interface';
import { General } from './entities/general.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('general')
@Controller('general')
export class GeneralController {
  constructor(private readonly generalService: GeneralService) {}

  @Post('/create')
  create(
    @Body() createGeneralDto: CreateGeneralDto,
  ): Promise<IResponse<General>> {
    return this.generalService.create(createGeneralDto);
  }

  @Get('/listar')
  findAll(): Promise<IResponse<General>> {
    return this.generalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generalService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGeneralDto: UpdateGeneralDto): Promise<IResponse<General>> {
    return this.generalService.update(+id, updateGeneralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generalService.remove(+id);
  }
}
