import { User } from '../../user/entities/user.entity';
import { IsEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExperienceDto {
  @ApiProperty({ type: 'string' })
  @IsEmpty({ message: 'campo requerido' })
  job: string;
  @ApiProperty({ type: 'date' })
  @IsEmpty({ message: 'campo requerido' })
  start_date: any;
  @ApiProperty({ type: 'date' })
  @IsEmpty({ message: 'campo requerido' })
  final_date: any;
  @ApiProperty({ type: 'string' })
  @IsEmpty({ message: 'campo requerido' })
  abstract: any;
  @ApiProperty({ type: 'number' })
  @IsEmpty({ message: 'campo requerido' })
  user: User;
}
