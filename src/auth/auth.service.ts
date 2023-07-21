import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { IResponse } from '../IResponse.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createAuthDto: CreateAuthDto): Promise<IResponse<any>> {
    const { name, firstname, pass, shortname } = createAuthDto;
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
        data: usuario ? usuario : new User(),
      };
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
