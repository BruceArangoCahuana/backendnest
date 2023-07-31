import { PartialType } from '@nestjs/swagger';
import { CreateSubgeneralDto } from './create-subgeneral.dto';

export class UpdateSubgeneralDto extends PartialType(CreateSubgeneralDto) {}
