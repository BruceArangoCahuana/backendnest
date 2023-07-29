import { User } from '../../user/entities/user.entity';
import { IsEmail, IsEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInformationDto {
  @ApiProperty({ type: 'string' })
  @IsEmail()
  @IsEmpty({ message: 'Campo requerido' })
  email: string;
  @ApiProperty({ type: 'string' })
  @MinLength(9, {
    message: 'Ingrese un numero de celular correcto',
  })
  @IsEmpty({ message: 'Campo requerido' })
  cellphone: string;
  @ApiProperty({ type: 'number' })
  @IsEmpty({ message: 'Campo requerido' })
  age: number;
  @ApiProperty({ type: 'number' })
  @IsEmpty({ message: 'Campo requerido' })
  user: User;
}
