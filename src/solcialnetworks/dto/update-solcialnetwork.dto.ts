import { PartialType } from '@nestjs/swagger';
import { CreateSolcialnetworkDto } from './create-solcialnetwork.dto';

export class UpdateSolcialnetworkDto extends PartialType(CreateSolcialnetworkDto) {}
