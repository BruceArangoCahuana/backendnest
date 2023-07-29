import { User } from '../../user/entities/user.entity';
import { IsEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSolcialnetworkDto {
  @ApiProperty({ type: 'string' })
  @IsEmpty({ message: 'campo requierido' })
  imgIcon: any;
  @ApiProperty({ type: 'string' })
  @IsEmpty({ message: 'campo requierido' })
  url: any;
  @ApiProperty({ type: 'number' })
  @IsEmpty({ message: 'campo requierido' })
  user: User;
}
