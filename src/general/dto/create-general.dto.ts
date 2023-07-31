import { User } from '../../user/entities/user.entity';
import { IsEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGeneralDto {
  @ApiProperty({
    type: 'string',
  })
  @IsEmpty({ message: 'campo requerido' })
  abstract: any;
  @ApiProperty({
    type: 'number',
  })
  @IsEmpty({ message: 'campo requerido' })
  user: User;
}
