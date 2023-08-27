import { User } from '../../user/entities/user.entity';
import { Proyect } from '../entities/proyect.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Icon } from '../../icon/entities/icon.entity';

export class CreateProyectDto {
  @ApiProperty({ type: 'string' })
  name: string;
  @ApiProperty({ type: 'text' })
  pathimage: any;
  @ApiProperty({ type: 'text' })
  pathurl: any;
  @ApiProperty({ type: 'text' })
  link: any;
  @ApiProperty({ type: 'number' })
  icon: Icon;
  @ApiProperty({ type: 'number' })
  user: User;
}
