import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { IResponse } from '../IResponse.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Experience } from './entities/experience.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectRepository(Experience)
    private readonly experienceRepository: Repository<Experience>,
  ) {}
  async create(
    createExperienceDto: CreateExperienceDto,
  ): Promise<IResponse<any>> {
    try {
      const {
        job,
        abstract,
        start_date,
        final_date,
        company,
        user,
        actuality,
        imagecompany,
      } = createExperienceDto;
      const experience = new Experience();
      experience.job = job;
      experience.abstract = abstract;
      experience.start_date = start_date;
      experience.final_date = final_date;
      experience.actuality = actuality;
      experience.user = user;
      experience.company = company;
      experience.imagecompany = imagecompany;
      await this.experienceRepository.save(experience);
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
      const experience = await this.experienceRepository.find({
        order: { start_date: 'DESC' },
      });
      return {
        code: '000',
        message: 'success',
        data: experience ? experience : new Experience(),
      };
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException(e.message);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} experience`;
  }

  async update(
    id: number,
    updateExperienceDto: UpdateExperienceDto,
  ): Promise<IResponse<any>> {
    try {
      const existe = await this.experienceRepository.findOne({
        where: {
          idexperience: id,
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

      const experienceUpdate = Object.assign(existe, updateExperienceDto);
      await this.experienceRepository.save(experienceUpdate);
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
    return `This action removes a #${id} experience`;
  }
}
