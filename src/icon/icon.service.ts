import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateIconDto } from './dto/create-icon.dto';
import { UpdateIconDto } from './dto/update-icon.dto';
import { IResponse } from '../IResponse.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Icon } from './entities/icon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IconService {
  constructor(
    @InjectRepository(Icon) private readonly iconRepository: Repository<Icon>,
  ) {}
  async create(createIconDto: CreateIconDto): Promise<IResponse<any>> {
    try {
      const { user, urlicon, name } = createIconDto;
      const iconNew = new Icon();
      iconNew.name = name;
      iconNew.urlicon = urlicon;
      iconNew.user = user;
      await this.iconRepository.save(iconNew);
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
      const icon = await this.iconRepository.find();
      return {
        code: '000',
        message: 'success',
        data: icon ? icon : new Icon(),
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} icon`;
  }

  async update(
    id: number,
    updateIconDto: UpdateIconDto,
  ): Promise<IResponse<any>> {
    try {
      const existe = await this.iconRepository.findOne({
        where: {
          idicon: id,
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
      Object.assign(existe, updateIconDto);
      await this.iconRepository.save(existe);
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
      const existe = await this.iconRepository.findOne({
        where: {
          idicon: id,
        },
      });
      await this.iconRepository.remove(existe);
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
