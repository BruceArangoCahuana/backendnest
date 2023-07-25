import { User } from '../../user/entities/user.entity';
import { IsEmail, IsEmpty, MinLength } from 'class-validator';

export class CreateInformationDto {
  @IsEmail()
  @IsEmpty({ message: 'Campo requerido' })
  email: string;
  @MinLength(9, {
    message: 'Ingrese un numero de celular correcto',
  })
  @IsEmpty({ message: 'Campo requerido' })
  cellphone: string;
  @IsEmpty({ message: 'Campo requerido' })
  age: number;
  @IsEmpty({ message: 'Campo requerido' })
  user: User;
}
