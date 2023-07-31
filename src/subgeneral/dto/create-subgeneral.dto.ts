import { User } from '../../user/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSubgeneralDto {
  @ApiProperty({ type: 'string' })
  abstrac: any;
  @ApiProperty({ type: 'number' })
  user: User;
}
