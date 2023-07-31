import { User } from '../../user/entities/user.entity';
import { IsEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExperienceDto {
  @ApiProperty({ type: 'string' })
  job: string;
  @ApiProperty({ type: 'date' })
  start_date: any;
  @ApiProperty({ type: 'date' })
  final_date: any;
  @ApiProperty({ type: 'string' })
  abstract: any;
  @ApiProperty({ type: 'string' })
  company: string;
  @ApiProperty({ type: 'string' })
  actuality: string;
  @ApiProperty({ type: 'string' })
  imagecompany: string;
  @ApiProperty({ type: 'number' })
  user: User;
}
