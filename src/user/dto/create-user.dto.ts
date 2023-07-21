import { IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({ message: 'campo requerido' })
  name: string;
  @IsNotEmpty({ message: 'campo requerido' })
  firstname: string;
  @IsNotEmpty({ message: 'campo requerido' })
  shortname: string;
  @IsNotEmpty({ message: 'campo requerido' })
  pass: any;
}
