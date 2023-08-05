import { User } from '../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudyDto {
  @ApiProperty({ type: 'string' })
  title: string;
  @ApiProperty({ type: 'string' })
  company: string;
  @ApiProperty({ type: 'date' })
  start_date: any;
  @ApiProperty({ type: 'date' })
  final_date: any;
  @ApiProperty({ type: 'string' })
  actuality: string;
  @ApiProperty({ type: 'string' })
  abstract: any;
  @ApiProperty({ type: 'string' })
  status: string;
  @ApiProperty({ type: 'number' })
  user: User;
}
