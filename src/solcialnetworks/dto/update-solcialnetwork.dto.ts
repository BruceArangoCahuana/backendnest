import { PartialType } from '@nestjs/mapped-types';
import { CreateSolcialnetworkDto } from './create-solcialnetwork.dto';

export class UpdateSolcialnetworkDto extends PartialType(CreateSolcialnetworkDto) {}
