import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({ message: 'Campo requerido' })
  name: string;
  @IsNotEmpty({ message: 'Campo requerido' })
  firstname: string;
  @IsEmail()
  correo: string;
  @MaxLength(8, {
    message: 'Contraseña muy larga',
  })
  pass: any;
}
