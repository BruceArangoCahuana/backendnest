import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSubgeneralDto } from './dto/create-subgeneral.dto';
import { UpdateSubgeneralDto } from './dto/update-subgeneral.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subgeneral } from './entities/subgeneral.entity';
import { Repository } from 'typeorm';
import { IResponse } from '../IResponse.interface';

@Injectable()
export class SubgeneralService {
  constructor(
    @InjectRepository(Subgeneral)
    private readonly subgeneralRepository: Repository<Subgeneral>,
  ) {}
  async create(
    createSubgeneralDto: CreateSubgeneralDto,
  ): Promise<IResponse<any>> {
    try {
      const { abstrac, user } = createSubgeneralDto;
      const subgenerals = new Subgeneral();
      subgenerals.abstrac = abstrac;
      subgenerals.user = user;
      await this.subgeneralRepository.save(subgenerals);
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
      const subgeneral = await this.subgeneralRepository.find();
      return {
        code: '000',
        message: 'success',
        data: subgeneral ? subgeneral : new Subgeneral(),
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} subgeneral`;
  }

  async update(
    id: number,
    updateSubgeneralDto: UpdateSubgeneralDto,
  ): Promise<IResponse<any>> {
    try {
      const existe = await this.subgeneralRepository.findOne({
        where: {
          idsubgeneral: id,
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
      const updateSubgeneral = Object.assign(existe, updateSubgeneralDto);
      await this.subgeneralRepository.save(updateSubgeneral);
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
    return `This action removes a #${id} subgeneral`;
  }
}
