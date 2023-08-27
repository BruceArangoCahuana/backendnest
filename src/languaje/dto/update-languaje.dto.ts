import { PartialType } from '@nestjs/swagger';
import { CreateLanguajeDto } from './create-languaje.dto';

export class UpdateLanguajeDto extends PartialType(CreateLanguajeDto) {}
