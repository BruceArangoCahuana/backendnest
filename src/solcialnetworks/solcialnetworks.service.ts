import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateSolcialnetworkDto } from './dto/create-solcialnetwork.dto';
import { UpdateSolcialnetworkDto } from './dto/update-solcialnetwork.dto';
import { IResponse } from '../IResponse.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Solcialnetwork } from './entities/solcialnetwork.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SolcialnetworksService {
  constructor(
    @InjectRepository(Solcialnetwork)
    private readonly socialRepository: Repository<Solcialnetwork>,
  ) {}
  async create(
    createSolcialnetworkDto: CreateSolcialnetworkDto,
  ): Promise<IResponse<any>> {
    try {
      const { imgIcon, url, user } = createSolcialnetworkDto;
      const icons = new Solcialnetwork();
      icons.imgIcon = imgIcon;
      icons.url = url;
      icons.user = user;
      await this.socialRepository.save(icons);
      return {
        code: '000',
        message: 'success',
        data: {
          messge: 'se creo correctamente',
        },
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAll(): Promise<IResponse<any>> {
    try {
      const iconos = await this.socialRepository.find();
      return {
        code: '000',
        message: 'success',
        data: iconos ? iconos : new Solcialnetwork(),
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} solcialnetwork`;
  }

  async update(
    id: number,
    updateSolcialnetworkDto: UpdateSolcialnetworkDto,
  ): Promise<IResponse<any>> {
    try {
      const existe = await this.socialRepository.findOne({
        where: {
          idsocialnetwor: id,
        },
      });
      if (!existe) {
        return {
          code: '001',
          message: 'error',
          data: {
            messge: 'Not found',
          },
        };
      }
      const socialnetworksUpdate = Object.assign(
        existe,
        updateSolcialnetworkDto,
      );
      await this.socialRepository.save(socialnetworksUpdate);
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} solcialnetwork`;
  }
}
