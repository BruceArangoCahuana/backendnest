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
      const { job, abstract, start_date, final_date, user } =
        createExperienceDto;
      const experience = new Experience();
      experience.job = job;
      experience.abstract = abstract;
      experience.start_date = start_date;
      experience.final_date = final_date;
      experience.user = user;
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
      const experience = await this.experienceRepository.find();
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

  update(id: number, updateExperienceDto: UpdateExperienceDto) {
    return `This action updates a #${id} experience`;
  }

  remove(id: number) {
    return `This action removes a #${id} experience`;
  }
}
