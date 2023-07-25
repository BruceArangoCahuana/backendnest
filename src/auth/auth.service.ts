import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { IResponse } from '../IResponse.interface';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthRepository } from './auth.repository';
import { compare } from 'bcrypt';
import { PayloadInterface } from './payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(User)
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
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
      data: {
        message: 'Se registro correctamente',
      },
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
        data: usuario,
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

  async login(loginAuthDto: LoginAuthDto): Promise<IResponse<any>> {
    const { shortname } = loginAuthDto;
    const user = await this.authRepository.findOne({
      where: {
        shortname: shortname,
      },
    });
    if (!user) {
      return {
        code: '001',
        message: 'el usuario no existe!',
        data: null,
      };
    }
    const pass = await compare(loginAuthDto.pass, user.pass);
    if (!pass) {
      return {
        code: '001',
        message: 'error de session!',
        data: null,
      };
    }
    const payload: PayloadInterface = {
      iduser: user.iduser,
      shortname: user.shortname,
    };
    const token = await this.jwtService.sign(payload);
    return {
      code: '000',
      message: 'session correcto',
      data: { token },
    };
  }
}
