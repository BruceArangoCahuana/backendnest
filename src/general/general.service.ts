import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateGeneralDto } from './dto/create-general.dto';
import { UpdateGeneralDto } from './dto/update-general.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { General } from './entities/general.entity';
import { Repository } from 'typeorm';
import { IResponse } from '../IResponse.interface';

@Injectable()
export class GeneralService {
  constructor(
    @InjectRepository(General)
    private readonly generalRepository: Repository<General>,
  ) {}
  async create(createGeneralDto: CreateGeneralDto): Promise<IResponse<any>> {
    try {
      const { abstract, user } = createGeneralDto;
      const generals = new General();
      generals.abstract = abstract;
      generals.user = user;
      await this.generalRepository.save(generals);
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
      const generals = await this.generalRepository.find();
      return {
        code: '000',
        message: 'success',
        data: generals ? generals : new General(),
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} general`;
  }

  async update(
    id: number,
    updateGeneralDto: UpdateGeneralDto,
  ): Promise<IResponse<any>> {
    try {
      const existe = await this.generalRepository.findOne({
        where: {
          idgeneral: id,
        },
      });
      if (!existe) {
        return {
          code: '001',
          message: 'error',
          data: {
            message: 'Not found',
          },
        };
      }

      const updateGeneral = Object.assign(existe, updateGeneralDto);
      await this.generalRepository.save(updateGeneral);
      return {
        code: '000',
        message: 'success',
        data: {
          message: 'se actulizo correctamente',
        },
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} general`;
  }
}
