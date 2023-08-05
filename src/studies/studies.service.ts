import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Study } from './entities/study.entity';
import { Repository } from 'typeorm';
import { IResponse } from '../IResponse.interface';

@Injectable()
export class StudiesService {
  constructor(
    @InjectRepository(Study)
    private readonly studyRepository: Repository<Study>,
  ) {}
  async create(createStudyDto: CreateStudyDto): Promise<IResponse<any>> {
    try {
      const {
        title,
        company,
        start_date,
        final_date,
        actuality,
        abstract,
        user,
        status,
      } = createStudyDto;
      const studys = new Study();
      studys.title = title;
      studys.company = company;
      studys.start_date = start_date;
      studys.final_date = final_date;
      studys.actuality = actuality;
      studys.abstract = abstract;
      studys.status = status;
      studys.user = user;
      await this.studyRepository.save(studys);
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
      const study = await this.studyRepository.find({
        order: {
          start_date: 'DESC',
        },
      });
      return {
        code: '000',
        message: 'success',
        data: study ? study : new Study(),
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} study`;
  }

  async update(
    id: number,
    updateStudyDto: UpdateStudyDto,
  ): Promise<IResponse<any>> {
    try {
      const existe = await this.studyRepository.findOne({
        where: {
          idstudy: id,
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
      const studyUpdate = Object.assign(existe, updateStudyDto);
      await this.studyRepository.save(studyUpdate);
      return {
        code: '000',
        message: 'success',
        data: {
          message: 'se actualizo correctamente',
        },
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} study`;
  }
}
