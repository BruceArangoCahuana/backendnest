import { PartialType } from '@nestjs/swagger';
import { CreateProyectDto } from './create-proyect.dto';

export class UpdateProyectDto extends PartialType(CreateProyectDto) {}
