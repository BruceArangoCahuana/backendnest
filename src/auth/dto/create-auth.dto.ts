import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'campo requerido' })
  name: string;
  @IsNotEmpty({ message: 'campo requerido' })
  firstname: string;
  @IsNotEmpty({ message: 'campo requerido' })
  shortname: string;
  @MinLength(3, { message: 'el password debes er mayor a 3 caracteres' })
  @MaxLength(8, { message: 'el password debes er menor a 8 caracteres' })
  @IsNotEmpty({ message: 'campo requerido' })
  pass: any;
}
