import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

import { IResponse } from '../IResponse.interface';
import { Repository } from "typeorm";



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository:Repository<any>
  ) {}
  async create(createUserDto: CreateUserDto): Promise<any> {
    return 'This action adds a new user';
  }

  async findAll(): Promise<IResponse<any>> {
    try {
      const usuario = await this.userRepository.find();
      return {
        code: '000',
        message: 'success',
        data: usuario ? usuario : new User(),
      };
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
