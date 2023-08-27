import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyect } from './entities/proyect.entity';
import { Repository } from 'typeorm';
import { IResponse } from '../IResponse.interface';

@Injectable()
export class ProyectService {
  constructor(
    @InjectRepository(Proyect)
    private readonly proyectRepository: Repository<any>,
  ) {
  }

  async create(createProyectDto: CreateProyectDto): Promise<IResponse<any>> {
    try {
      const { name, link, pathimage, pathurl, user, icon } = createProyectDto;
      const newProyect = new Proyect();
      newProyect.name = name;
      newProyect.link = link;
      newProyect.pathimage = pathimage;
      newProyect.pathurl = pathurl;
      newProyect.user = user;
      newProyect.icon = icon;
      await this.proyectRepository.save(newProyect);
      return {
        code: '000',
        message: 'success',
        data: {
          message: 'Se creo correctamente',
        },
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAll(): Promise<IResponse<any>> {
    try {
      const proyect = await this.proyectRepository.find();
      return {
        code: '000',
        message: 'success',
        data: proyect ? proyect : new Proyect(),
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} proyect`;
  }

  async update(
    id: number,
    updateProyectDto: UpdateProyectDto,
  ): Promise<IResponse<any>> {
    try {
      const existe = await this.proyectRepository.findOne({
        where: {
          idproyect: id,
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
      Object.assign(existe, updateProyectDto);
      await this.proyectRepository.save(existe);
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

  async remove(id: number): Promise<IResponse<any>> {
    try {
      const eliminar = await this.proyectRepository.findOne({
        where: {
          idproyect: id,
        },
      });
      await this.proyectRepository.remove(eliminar);
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
