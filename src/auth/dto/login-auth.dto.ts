import { IsNotEmpty } from 'class-validator';

export class LoginAuthDto {
  @IsNotEmpty({ message: 'campo requerido' })
  shortname: string;
  @IsNotEmpty({ message: 'campo requerido' })
  pass: any;
}
