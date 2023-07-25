import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateInformationDto } from './dto/create-information.dto';
import { UpdateInformationDto } from './dto/update-information.dto';
import { IResponse } from '../IResponse.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Information } from './entities/information.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InformationService {
  constructor(
    @InjectRepository(Information)
    private readonly informationRepository: Repository<Information>,
  ) {}
  async create(
    createInformationDto: CreateInformationDto,
  ): Promise<IResponse<any>> {
    try {
      const { email, cellphone, age, user } = createInformationDto;
      const informations = new Information();
      informations.email = email;
      informations.cellphone = cellphone;
      informations.age = age;
      informations.user = user;
      await this.informationRepository.save(informations);
      return {
        code: '000',
        message: 'success',
        data: {
          message: 'Se registro correctamente',
        },
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  async findAll(): Promise<IResponse<any>> {
    try {
      const information = await this.informationRepository.find({
        relations: {
          user: true,
        },
        select: {
          user: {
            iduser: true,
            shortname: true,
          },
        },
      });
      return {
        code: '000',
        message: 'success',
        data: information ? information : new Information(),
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} information`;
  }

  async update(
    id: number,
    updateInformationDto: UpdateInformationDto,
  ): Promise<IResponse<any>> {
    try {
      const existe = await this.informationRepository.findOne({
        where: {
          idinformation: id,
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
      const updateInformation = Object.assign(existe, updateInformationDto);
      await this.informationRepository.save(updateInformation);
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
    return `This action removes a #${id} information`;
  }
}
