import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateStackDto } from './dto/create-stack.dto';
import { UpdateStackDto } from './dto/update-stack.dto';
import { IResponse } from '../IResponse.interface';
import { Stack } from './entities/stack.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StacksService {
  constructor(
    @InjectRepository(Stack)
    private readonly stackRepository: Repository<Stack>,
  ) {}
  async create(createStackDto: CreateStackDto): Promise<IResponse<any>> {
    try {
      const { name, porcentaje, user } = createStackDto;
      const stacks = new Stack();
      stacks.name = name;
      stacks.porcentaje = porcentaje;
      stacks.user = user;
      await this.stackRepository.save(stacks);
      return {
        code: '000',
        message: 'success',
        data: {
          message: 'se creo correctamente',
        },
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAll(): Promise<IResponse<any>> {
    try {
      const stack = await this.stackRepository.find();
      return {
        code: '000',
        message: 'success',
        data: stack ? stack : new Stack(),
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} stack`;
  }

  async update(
    id: number,
    updateStackDto: UpdateStackDto,
  ): Promise<IResponse<any>> {
    try {
      const existe = await this.stackRepository.findOne({
        where: {
          idstack: id,
        },
      });
      if (!existe) {
        return {
          code: '001',
          message: 'error',
          data: {
            message: 'not found',
          },
        };
      }
      const stackUpdate = Object.assign(existe, updateStackDto);
      await this.stackRepository.save(stackUpdate);
      return {
        code: '000',
        message: 'success',
        data: {
          message: 'Se actulizo correctamente',
        },
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} stack`;
  }
}
