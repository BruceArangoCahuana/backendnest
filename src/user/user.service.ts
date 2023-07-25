import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { IResponse } from '../IResponse.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<IResponse<any>> {
    const { name, firstname, pass, shortname } = createUserDto;
    const user = new User();
    user.name = name;
    user.firstname = firstname;
    user.shortname = shortname;
    user.pass = pass;
    const existeUser = await this.userRepository.findOne({
      where: {
        shortname: shortname,
      },
    });
    if (existeUser) {
      return {
        code: '001',
        message: 'success',
        data: { message: 'El usuario ya exite' },
      };
    }
    const newUser = await this.userRepository.save(user);
    return {
      code: '000',
      message: 'success',
      data: newUser,
    };
  }

  async findAll(): Promise<IResponse<any>> {
    try {
      const usuario = await this.userRepository.find({
        select: {
          iduser: true,
          name: true,
          firstname: true,
          shortname: true,
        },
      });
      return {
        code: '000',
        message: 'success',
        data:{
          message: 'Se registro correctamente',
        },
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
