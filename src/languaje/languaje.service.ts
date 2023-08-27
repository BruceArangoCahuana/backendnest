import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateLanguajeDto } from './dto/create-languaje.dto';
import { UpdateLanguajeDto } from './dto/update-languaje.dto';
import { IResponse } from '../IResponse.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Languaje } from './entities/languaje.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LanguajeService {
  constructor(
    @InjectRepository(Languaje)
    private readonly languajeRepository: Repository<Languaje>,
  ) {}
  async create(createLanguajeDto: CreateLanguajeDto): Promise<IResponse<any>> {
    try {
      const { name, porcentaje, user } = createLanguajeDto;
      const newLangueaje = new Languaje();
      newLangueaje.name = name;
      newLangueaje.porcentaje = porcentaje;
      newLangueaje.user = user;
      await this.languajeRepository.save(newLangueaje);
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
      const languaje = await this.languajeRepository.find();
      return {
        code: '000',
        message: 'success',
        data: languaje ? languaje : new Languaje(),
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} languaje`;
  }

  async update(
    id: number,
    updateLanguajeDto: UpdateLanguajeDto,
  ): Promise<IResponse<any>> {
    try {
      const existe = await this.languajeRepository.findOne({
        where: {
          idlanguaje: id,
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

      Object.assign(existe, updateLanguajeDto);
      await this.languajeRepository.save(existe);
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

  async remove(id: number) {
    try {
      const removeLanguaje = await this.languajeRepository.findOne({
        where: {
          idlanguaje: id,
        },
      });
      await this.languajeRepository.remove(removeLanguaje);
      return {
        code: '000',
        message: 'success',
        data: {
          message: 'Se elimino correctamente',
        },
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }
}
