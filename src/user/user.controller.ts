import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from "@nestjs/common";
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IResponse } from '../IResponse.interface';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<IResponse<any>> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<IResponse<any>> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
