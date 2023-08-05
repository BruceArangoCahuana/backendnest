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
import { StacksService } from './stacks.service';
import { CreateStackDto } from './dto/create-stack.dto';
import { UpdateStackDto } from './dto/update-stack.dto';
import { IResponse } from '../IResponse.interface';
import { Stack } from './entities/stack.entity';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('stacks')
@Controller('stacks')
export class StacksController {
  constructor(private readonly stacksService: StacksService) {}

  @Post('/create')
  create(@Body() createStackDto: CreateStackDto): Promise<IResponse<Stack>> {
    return this.stacksService.create(createStackDto);
  }

  @Get('/listar')
  findAll(): Promise<IResponse<Stack>> {
    return this.stacksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stacksService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateStackDto: UpdateStackDto,
  ): Promise<IResponse<any>> {
    return this.stacksService.update(+id, updateStackDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stacksService.remove(+id);
  }
}
