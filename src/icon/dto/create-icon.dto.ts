import { User } from '../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateIconDto {
  @ApiProperty({ type: 'string' })
  name: string;
  @ApiProperty({ type: 'text' })
  urlicon: any;
  @ApiProperty({ type: 'number' })
  user: User;
}
