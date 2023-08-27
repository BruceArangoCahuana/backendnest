import { User } from '../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguajeDto {
  @ApiProperty({ type: 'string' })
  name: string;
  @ApiProperty({ type: 'decimal' })
  porcentaje: any;
  @ApiProperty({ type: 'number' })
  user: User;
}
