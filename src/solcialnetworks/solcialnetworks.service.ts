import { Injectable } from '@nestjs/common';
import { CreateSolcialnetworkDto } from './dto/create-solcialnetwork.dto';
import { UpdateSolcialnetworkDto } from './dto/update-solcialnetwork.dto';

@Injectable()
export class SolcialnetworksService {
  create(createSolcialnetworkDto: CreateSolcialnetworkDto) {
    return 'This action adds a new solcialnetwork';
  }

  findAll() {
    return `This action returns all solcialnetworks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solcialnetwork`;
  }

  update(id: number, updateSolcialnetworkDto: UpdateSolcialnetworkDto) {
    return `This action updates a #${id} solcialnetwork`;
  }

  remove(id: number) {
    return `This action removes a #${id} solcialnetwork`;
  }
}
